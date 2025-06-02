package com.example.atividade_deploy_29_05.Service;

import com.example.atividade_deploy_29_05.Model.Restaurante;
import com.example.atividade_deploy_29_05.Repository.RestauranteRepository;
import jakarta.validation.Valid;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RestauranteService {

    private final RestauranteRepository restauranteRepository;

    public RestauranteService(RestauranteRepository restauranteRepository) {
        this.restauranteRepository = restauranteRepository;
    }

    public List<Restaurante> listarTodos() {
        return restauranteRepository.findAll();
    }

    public Optional<Restaurante> buscarPorId(Long id) {
        return restauranteRepository.findById(id);
    }

    public Restaurante salvar(Restaurante restaurante) {
        return restauranteRepository.save(restaurante);
    }

    public Restaurante atualizar(@Valid Restaurante restaurante) {
        Restaurante restauranteAtualizar = restauranteRepository.findById(restaurante.getId())
                .orElseThrow(() -> new IllegalArgumentException("Restaurante não encontrado."));

        restauranteAtualizar.setNomePrato(restaurante.getNomePrato());
        restauranteAtualizar.setDescricao(restaurante.getDescricao());
        restauranteAtualizar.setPreco(restaurante.getPreco());
        restauranteAtualizar.setDisponibilidade(restaurante.getDisponibilidade());
        restauranteAtualizar.setCategoria(restaurante.getCategoria());
        restauranteAtualizar.setUrlImagem(restaurante.getUrlImagem());

        return restauranteRepository.save(restauranteAtualizar);
    }

    public boolean excluir(Long id) {
        if (restauranteRepository.existsById(id)) {
            restauranteRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
