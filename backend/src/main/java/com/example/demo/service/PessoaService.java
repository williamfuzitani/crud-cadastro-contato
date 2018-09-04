package com.example.demo.service;

import com.example.demo.model.Pessoa;
import com.example.demo.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/pessoa")
public class PessoaService {

    @Autowired
    PessoaRepository pessoaRepository;

    @PostMapping
    public Pessoa save(@RequestBody Pessoa pessoa){
        return pessoaRepository.save(pessoa);
    }

    @GetMapping("/{id}")
    public Optional<Pessoa> getPessoa(@PathVariable("id") Long id) {
        Optional<Pessoa> pessoa = pessoaRepository.findById(id);
        return pessoa;
    }

    @GetMapping
    public List<Pessoa> getTodasAsPessoas() {
        List<Pessoa> pessoas =  pessoaRepository.findAll();
        return pessoas;
    }

    @DeleteMapping("/{id}")
    public void deletarPessoa(@PathVariable("id") Long id) {
        pessoaRepository.deleteById(id);
    }


//    @PutMapping("/{id}")
//    public ResponseEntity<Pessoa> updatePessoa(@PathVariable Long id, @RequestBody Pessoa pessoa) {
//        Optional<Pessoa> pessoas = pessoaRepository.findById(id);
//        if (pessoas.isPresent()) {
//            Pessoa pessoaAtual = pessoas.get();
//            pessoaAtual.setNome(pessoa.getNome());
//            pessoaAtual.setDataNascimento(pessoa.getDataNascimento());
//            pessoaAtual.setTelefone(pessoa.getTelefone());
//            pessoaRepository.updatePessoa(pessoaAtual);
//            return ResponseEntity.ok(pessoaAtual);
//        }
//        return null;
//    }

}
