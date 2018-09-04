package com.example.demo.repository;

import com.example.demo.model.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;

@CrossOrigin
public interface PessoaRepository extends JpaRepository<Pessoa, Long>{

    Optional<Pessoa> findById(Long id);
}
