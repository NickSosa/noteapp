package com.nicksosa.noteapp.service.jpa;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nicksosa.noteapp.entity.Note;
import com.nicksosa.noteapp.repository.NoteRepository;
import com.nicksosa.noteapp.service.INoteService;

@Service
public class NoteServiceImpl implements INoteService{
	
	@Autowired
	private NoteRepository repo;

	@Override
	public List<Note> getAll() {
		return repo.findAll();
	}

	@Override
	public Note getById(Long id) {
		return repo.findById(id).orElse(null);
	}

	@Override
	public Note save(Note note) {
		return repo.save(note);
	}

	@Override
	public void delete(Long id) {
		repo.deleteById(id);
	}

	@Override
	public boolean exists(Long id) {
		return id == null ? false : repo.existsById(id);
	}

}
