package com.nicksosa.noteapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nicksosa.noteapp.entity.Note;
import com.nicksosa.noteapp.service.INoteService;
import com.nicksosa.noteapp.util.APIResponse;
import com.nicksosa.noteapp.util.ResponseUtil;

import jakarta.validation.Valid;

@RestController
@RequestMapping(path="/api/note")
public class NoteController {

	@Autowired
	private INoteService service;
	
	@GetMapping
	public ResponseEntity<APIResponse<List<Note>>> getAllCategory() {
		List<Note> notes = service.getAll();
		return notes.isEmpty() ? ResponseUtil.notFound("No notes found") :
			ResponseUtil.success(notes);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<APIResponse<Note>> getCategoryById(@PathVariable("id") Long id) {
		return service.exists(id) ? ResponseUtil.success(service.getById(id)) :
			ResponseUtil.notFound("No note found with id {0}", id);
	}
	
	@PostMapping
	public ResponseEntity<APIResponse<Note>> createCategory(@Valid @RequestBody Note note, BindingResult result) {
		if (result.hasErrors()) {
			return ResponseUtil.badRequest("Validation error when creating note");}
		return service.exists(note.getId()) ? ResponseUtil.badRequest("Note alredy exists with id {0}", note.getId()) :
			ResponseUtil.success(service.save(note));
	}
	
	@PutMapping("{id}")
	public ResponseEntity<APIResponse<Note>> updateCategory(@Valid @RequestBody Note note, @PathVariable("id") Long id, BindingResult result) {
		note.setId(id);
		if (result.hasErrors()) {
			return ResponseUtil.badRequest("Validation error when updating note");}
		return service.exists(id) ? ResponseUtil.success(service.save(note)) :
			ResponseUtil.badRequest("No note found with id {0}", id);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<APIResponse<Note>> deleteCategory(@PathVariable("id") Long id) {
		if (service.exists(id)) {
			service.delete(id);
			return ResponseUtil.successDeleted("Succesfully deleted note with id {0}", id);}
		else {
			return ResponseUtil.badRequest("Delete error, unable to find note with id {0}", id);}
	}
}
