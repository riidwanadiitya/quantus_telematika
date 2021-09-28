import React, { useEffect, useState } from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { GetPokemons } from '../actions/Pokemons_Actions';
import { Link } from 'react-router-dom';
import { Button, Card, Container, Grid, Input, Pagination } from 'semantic-ui-react';

const Pokemons = (props) => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.Pokemons);

    useEffect(() => {
        GetData(1)
    }, [])

    const GetData = (page = 1) => {
        dispatch(GetPokemons(page))
    }

    const showData = () => {
        if (pokemons.loading) {
            return <h1>Loading...</h1>
        }

        if (!_.isEmpty(pokemons.dataPokemons)) {
            return pokemons.dataPokemons.map((dat, idx) => {
                return (
                    <Grid.Column>
                        <Card>
                            <Card.Content>
                                <Card.Header>{dat.name}</Card.Header>
                            </Card.Content>
                            <Card.Content extra>
                                <Button as={Link} to={`/pokemon/${dat.name}`} fluid basic color='green'>
                                    View
                                </Button>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                )
            })
        }

        

        if (pokemons.errorMsg !== "") {
            return <h1>{pokemons.errorMsg}</h1>
        }

        return <h1>Unable to get data</h1>
    }

    return (
        <div>
            <div className="App-header">
                <Container >
                    <Grid textAlign="center">
                        <Input placeholder='Search...' onChange={e => setSearch(e.target.value)} />
                        <Button onClick={() => props.history.push(`/pokemon/${search}`)}>Search</Button>
                    </Grid>
                    <Grid columns={4} stackable textAlign="center">
                        {showData()}
                    </Grid>
                    <Grid textAlign="center">
                        <Pagination
                            defaultActivePage={1}
                            firstItem={null}
                            lastItem={null}
                            totalPages={Math.ceil(pokemons.count/10)}
                            onPageChange={(event, data) => GetData(data.activePage+1)}
                            />
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default Pokemons
