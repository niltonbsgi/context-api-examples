import React, { Component, Fragment } from 'react'
import { getUsers } from '../services/api'

class Users extends Component {

    getUsers = async () => {

        const { showLoading, hideLoading } = this.props

        showLoading('Carregando usuários...')

        const response = await getUsers().then(response => {
            hideLoading()
            return response
        })
        console.log({ response })
    }

    render() {

        return (
            <Fragment>
                <button onClick={this.getUsers}>Buscar usuários</button>
            </Fragment>
        )
    }
}

export default Users