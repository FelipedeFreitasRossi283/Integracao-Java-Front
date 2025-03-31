package com.example.demo.Controller;

import com.example.demo.Entity.Produto;
import com.example.demo.Repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.StreamingHttpOutputMessage;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Produto")
public class produtoController {


    @Autowired
    ProdutoRepository produtoRepository;

    @PostMapping("/add")
    public ResponseEntity<Boolean> adicionarProduto(@RequestBody Produto p) {
        produtoRepository.save(p);

        return new ResponseEntity<Boolean>(true, HttpStatus.OK);
    }

    @GetMapping("/get")
    public List<Produto> getProfessor() {

        return produtoRepository.findAll();
    }

}
