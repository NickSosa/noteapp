package com.nicksosa.noteapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nicksosa.noteapp.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{
	
}
