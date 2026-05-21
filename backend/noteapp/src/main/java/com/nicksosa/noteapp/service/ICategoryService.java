package com.nicksosa.noteapp.service;

import java.util.List;

import com.nicksosa.noteapp.entity.Category;

public interface ICategoryService {

	List<Category> getAll();
	
	Category getById(Long id);
	
	Category save(Category category);
	
	void delete(Long id);
	
	boolean exists(Long id);
}
