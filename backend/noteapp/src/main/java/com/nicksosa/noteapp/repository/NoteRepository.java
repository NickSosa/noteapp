package com.nicksosa.noteapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nicksosa.noteapp.entity.Note;

public interface NoteRepository extends JpaRepository<Note, Long>{
	
}
