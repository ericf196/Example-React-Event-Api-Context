import React, { Component } from 'react'
import axios from 'axios'

const CategoriaContext = React.createContext()

export const CategoriasConsumer = CategoriaContext.Consumer


class CategoriasProvider extends Component {
    state = {
        categorias: []
    }

    token = 'TFRNIK5IP4XGIIW5E6L2'

    componentDidMount() {
        this.obtenerCategorias()
    }

    obtenerCategorias = async () => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`

        let categorias = await axios.get(url)        
        
        this.setState({categorias: categorias.data.categories})
    }

    render() {
        return (
            <CategoriaContext.Provider
                value={{
                    categorias: this.state.categorias
                }}
            >
                {this.props.children}
            </CategoriaContext.Provider>
        );

    }

}

export default CategoriasProvider