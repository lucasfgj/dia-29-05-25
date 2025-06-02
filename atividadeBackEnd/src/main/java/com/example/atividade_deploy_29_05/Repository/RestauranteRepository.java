package com.example.atividade_deploy_29_05.Repository;

import com.example.atividade_deploy_29_05.Model.Restaurante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RestauranteRepository extends JpaRepository<Restaurante, Long> {
    Optional<Restaurante> findById(Long aLong);
}
