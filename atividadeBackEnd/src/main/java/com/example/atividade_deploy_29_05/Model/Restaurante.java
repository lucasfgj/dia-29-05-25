package com.example.atividade_deploy_29_05.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import org.aspectj.bridge.IMessage;

@Entity
@Table(name = "tab_restaurante")
public class Restaurante {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Não pode ser vazio")
    private String nomePrato;

    @NotBlank(message = "Não pode estar vazia")
    private String descricao;

    private double preco;

    @Enumerated(EnumType.STRING)
    private Categoria categoria;

    @Enumerated(EnumType.STRING)
    private Disponibilidade disponibilidade;

    @NotBlank(message = "Deve conter o link da imagem")
    private String urlImagem;

    public Restaurante() {
    }

    public Restaurante(Long id, String nomePrato, String descricao, double preco, Categoria categoria, Disponibilidade disponibilidade, String urlImagem) {
        this.id = id;
        this.nomePrato = nomePrato;
        this.descricao = descricao;
        this.preco = preco;
        this.categoria = categoria;
        this.disponibilidade = disponibilidade;
        this.urlImagem = urlImagem;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public @NotBlank(message = "Não pode ser vazio") String getNomePrato() {
        return nomePrato;
    }

    public void setNomePrato(@NotBlank(message = "Não pode ser vazio") String nomePrato) {
        this.nomePrato = nomePrato;
    }

    public @NotBlank(message = "Não pode estar vazia") String getDescricao() {
        return descricao;
    }

    public void setDescricao(@NotBlank(message = "Não pode estar vazia") String descricao) {
        this.descricao = descricao;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Disponibilidade getDisponibilidade() {
        return disponibilidade;
    }

    public void setDisponibilidade(Disponibilidade disponibilidade) {
        this.disponibilidade = disponibilidade;
    }

    public @NotBlank(message = "Deve conter o link da imagem") String getUrlImagem() {
        return urlImagem;
    }

    public void setUrlImagem(@NotBlank(message = "Deve conter o link da imagem") String urlImagem) {
        this.urlImagem = urlImagem;
    }
}