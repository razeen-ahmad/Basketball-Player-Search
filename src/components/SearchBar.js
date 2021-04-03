import React from 'react';
import { Input, Container, FormControl } from "@chakra-ui/react"

class SearchBar extends React.Component {

    state = { searchTerm: '' }

    onChange = (event) => {
        event.preventDefault();
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSearch(this.state.searchTerm);
    }

    render() {
        return (
            <Container maxWidth="100ch" mt={50}>
                <form onChange={this.onChange} onSubmit={this.onSubmit}>
                    <FormControl id="search bar">
                        <Input 
                            type="text"
                            placeholder="Search..." 
                            size="lg" 
                            variant="flushed" 
                            value={this.state.searchTerm}
                            onChange={(e) => this.setState({ searchTerm: e.target.value })}
                        />
                    </FormControl>
                </form>
            </Container>
        )
    }
};

export default SearchBar;