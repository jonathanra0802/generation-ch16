package com.generation.jra;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.generation.jra.model.UsuarioModel;
import com.generation.jra.repository.UsuarioRepository;

@SpringBootApplication
public class SpringPruebasUnitariasApplication {
	@Autowired 
	private UsuarioRepository usuariorepository;

	@test
	void crearUsuarioTest(){
		UsuarioModel usuariomodel= new UsuarioModel();
	usuariomodel.setId(1);
	usuariomodel.setNombre("vic");
	usuariomodel.setClave("1234");
	UsuarioModel r = usuariorepository.save(usuariomodel);
	
	assertTrue(r.getClave().equalsIgnoreCase(usuariomodel.getNombre()));
	System.out.println();

	}

}
