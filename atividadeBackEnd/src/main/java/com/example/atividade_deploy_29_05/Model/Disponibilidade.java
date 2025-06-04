package com.example.atividade_deploy_29_05.Model;

public enum Disponibilidade {
    DISPONIVEL("Disponivel"),
    INDISPONIVEL("Indisponivel");

    private final String descricao;

    Disponibilidade(String descricao) {
        this.descricao = descricao;
    }

    public String getDescricao() {
        return descricao;
    }
}
