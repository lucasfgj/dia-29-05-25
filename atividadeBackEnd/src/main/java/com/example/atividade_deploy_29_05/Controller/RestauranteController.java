package com.example.atividade_deploy_29_05.Controller;

import com.example.atividade_deploy_29_05.Model.Restaurante;
import com.example.atividade_deploy_29_05.Service.RestauranteService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/restaurantes")
public class RestauranteController {

    private final RestauranteService restauranteService;

    public RestauranteController(RestauranteService restauranteService) {
        this.restauranteService = restauranteService;
    }

    @GetMapping
    public List<Restaurante> listarTodos() {
        return restauranteService.listarTodos();
    }


    @PostMapping
    public ResponseEntity<Map<String, Object>> salvar(@Valid @RequestBody Restaurante restaurante) {
        restauranteService.salvar(restaurante);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(Map.of("mensagem", "Prato cadastrado com sucesso."));
    }

    @PutMapping
    public ResponseEntity<Map<String, Object>> atualizar(@Valid @RequestBody Restaurante restaurante) {
        restauranteService.atualizar(restaurante);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(Map.of("mensagem", "Prato atualizado com sucesso"));
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> excluir(@PathVariable Long id) {
        restauranteService.excluir(id);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(Map.of("mensagem", "Prato excluído com sucesso"));
    }
}