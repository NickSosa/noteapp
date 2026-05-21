package com.nicksosa.noteapp.entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Note extends BaseEntity{

	@NotBlank(message = "You must specify a title for the note")
	private String title;
	
	@NotBlank(message = "You must specify a body for the note")
	private String body;
	
	private Boolean archived;
	
	@NotBlank(message = "You must specify a date for the note")
	private String date;
	
	@ManyToMany
	@JoinTable(name = "Category_note",
		joinColumns = @JoinColumn(name = "note_id"),
		inverseJoinColumns = @JoinColumn(name= "category_id"))
	private List <Category> category = new ArrayList<Category>();

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public Boolean getArchived() {
		return archived;
	}

	public void setArchived(Boolean archived) {
		this.archived = archived;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public List<Category> getCategory() {
		return category;
	}

	public void setCategory(List<Category> category) {
		this.category = category;
	}
}
