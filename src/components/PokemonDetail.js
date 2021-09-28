import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Image, List, Header, Segment, Grid, Container } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { PokemonDetailed } from '../actions/Pokemons_Actions';
import _ from 'lodash';

const PokemonDetail = (props) => {
    const pokemon_name = props.match.params.pokemon
    const dispatch = useDispatch();
    const pokemonDetail = useSelector(state => state.PokemonDetail);

    useEffect(() => {
        dispatch(PokemonDetailed(pokemon_name))
    }, [])

    const showData = () => {
        if (!_.isEmpty(pokemonDetail.dataPokemon[pokemon_name])) {
            const pokemonData = pokemonDetail.dataPokemon[pokemon_name]
            return (
                <Segment placeholder>
                    <Grid columns={2} stackable textAlign='center'>
                        <Grid.Row verticalAlign='middle'>
                            <Grid.Column>
                                <Image src={pokemonData.sprites.other.dream_world.front_default} centered />
                            </Grid.Column>
                            <Grid.Column>
                                <List divided relaxed>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header as='h2'>{pokemonData.types[0].type.name.toUpperCase()}</List.Header>
                                            <List.Description as='h5'>Type</List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header as='h2'>{pokemonData.height}</List.Header>
                                            <List.Description as='h5'>Height</List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header as='h2'>{pokemonData.weight}</List.Header>
                                            <List.Description as='h5'>Weight</List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                <List bulleted horizontal>
                                                {pokemonData.abilities.map((dat, idx) => {
                                                    return <List.Item key={idx} style={{fontSize:20}}>{dat.ability.name}</List.Item>
                                                })}
                                            </List>
                                            </List.Header>
                                            <List.Description as='h5'>Abilities</List.Description>
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Button as={Link} to="/">Back</Button>
                        </Grid.Row>
                    </Grid>
                </Segment>
                // <Card>
                //     <Image src={pokemonData.sprites.other.dream_world.front_default} wrapped ui={false} />
                //     <Card.Content>
                //         <Card.Header></Card.Header>
                //         <Card.Meta>
                //         Type: {pokemonData.types[0].type.name.toUpperCase()}
                //         </Card.Meta>
                //         <Card.Description>
                //             Height : {pokemonData.height} <br/>
                //              Weight: {pokemonData.weight} <br/>
                //              Ability: <List as="ul">
                //              {pokemonData.abilities.map((dat,idx)=>{
                //                  return <List.Item as="li" key={idx}>{dat.ability.name}</List.Item>
                //              })}
                //              </List>
                //         </Card.Description>
                //     </Card.Content>
                // </Card>
            )
        }

        if (pokemonDetail.loading) {
            return <h1>Loading...</h1>
        }

        if (pokemonDetail.errorMsg !== "") {
            return <h1>{pokemonDetail.errorMsg}</h1>
        }

        return <h1>Unable to get data</h1>
    }

    return (
        <div className="App">
            <div className="App-header">
                <Container>
                    <h1>{pokemon_name.toUpperCase()}</h1>
                    {showData()}
                </Container>
            </div>
        </div>
    )
}

export default PokemonDetail
