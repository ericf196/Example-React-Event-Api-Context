import React, { Component } from 'react'
import { CategoriasConsumer } from '../context/CategoriaContext'
import { EventosConsumer } from '../context/EventoContext'


class Formulario extends Component {

    state = {
        nombre: '',
        categoria: ''
    }

    obtenerDatosEventos = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <EventosConsumer>
                {(value) => {
                    //console.log(value)
                    return (
                        <form 
                        onSubmit={ e => {e.preventDefault(); value.obtenerEventos(this.state)}}
                        >
                            <fieldset className="uk-fielset uk-margin">
                                <legend className="uk-legend uk-text-center">
                                    Busca tu evento por nombre o por categoria
                    </legend>
                            </fieldset>

                            <div className="uk-column-1-3@m uk-margin">
                                <div className="uk-margin" uk-margin="true">
                                    <input
                                        name="nombre"
                                        className="uk-input"
                                        type="text"
                                        placeholder="Nombre de evento o ciudad"
                                        autoComplete="off"
                                        onChange={this.obtenerDatosEventos}
                                    />
                                </div>

                                <div className="uk-margin" uk-margin="true">
                                    <select
                                        className="uk-select"
                                        name="categoria"
                                        onChange={this.obtenerDatosEventos}
                                    >
                                        <option value="">-- Selecciona la Categoria --</option>
                                        <CategoriasConsumer>
                                            {(value) => {
                                                return (
                                                    value.categorias.map(categoria => (
                                                        <option key={categoria.id} value={categoria.id} data-uk-form-select>
                                                            {categoria.name_localized}
                                                        </option>
                                                    ))
                                                )
                                            }}
                                        </CategoriasConsumer>
                                    </select>
                                </div>

                                <div>
                                    <input type="submit" className="uk-button uk-button-danger" value="Buscar Eventos" />
                                </div>

                            </div>
                        </form>
                    )
                }}
            </EventosConsumer>
        )
    }
}

export default Formulario
