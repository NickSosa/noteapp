package com.nicksosa.noteapp.service;

import java.util.List;

import com.nicksosa.noteapp.entity.Note;

public interface INoteService {

	List<Note> getAll();
	
	Note getById(Long id);
	
	Note save(Note note);
	
	void delete(Long id);
	
	boolean exists(Long id);
}
