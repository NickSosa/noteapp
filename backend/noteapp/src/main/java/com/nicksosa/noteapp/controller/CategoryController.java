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

import com.nicksosa.noteapp.entity.Category;
import com.nicksosa.noteapp.service.ICategoryService;
import com.nicksosa.noteapp.util.ResponseUtil;

import jakarta.validation.Valid;

import com.nicksosa.noteapp.util.APIResponse;

@RestController
@RequestMapping(path="/api/category")
public class CategoryController {

	@Autowired
	private ICategoryService service;
	
	@GetMapping
	public ResponseEntity<APIResponse<List<Category>>> getAllCategory() {
		List<Category> categories = service.getAll();
		return categories.isEmpty() ? ResponseUtil.notFound("No categories found") :
			ResponseUtil.success(categories);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<APIResponse<Category>> getCategoryById(@PathVariable("id") Long id) {
		return service.exists(id) ? ResponseUtil.success(service.getById(id)) :
			ResponseUtil.notFound("No categories found with id {0}", id);
	}
	
	@PostMapping
	public ResponseEntity<APIResponse<Category>> createCategory(@Valid @RequestBody Category category, BindingResult result) {
		if (result.hasErrors()) {
			return ResponseUtil.badRequest("Validation error when creating category");}
		return service.exists(category.getId()) ? ResponseUtil.badRequest("Category alredy exists with id {0}", category.getId()) :
			ResponseUtil.success(service.save(category));
	}
	
	@PutMapping("{id}")
	public ResponseEntity<APIResponse<Category>> updateCategory(@Valid @RequestBody Category category, @PathVariable("id") Long id, BindingResult result) {
		category.setId(id);
		if (result.hasErrors()) {
			return ResponseUtil.badRequest("Validation error when updating category");}
		return service.exists(id) ? ResponseUtil.success(service.save(category)) :
			ResponseUtil.badRequest("No category found with id {0}", id);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<APIResponse<Category>> deleteCategory(@PathVariable("id") Long id) {
		if (service.exists(id)) {
			service.delete(id);
			return ResponseUtil.successDeleted("Succesfully deleted category with id {0}", id);}
		else {
			return ResponseUtil.badRequest("Delete error, unable to find category with id {0}", id);}
	}
}
