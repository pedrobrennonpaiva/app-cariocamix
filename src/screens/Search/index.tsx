import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { ProductCard } from "../../components/ProductCard";
import { SearchBar } from "../../components/SearchBar";
import { Product } from "../../models/Product";
import { sections } from "../../models/sections";
import { styles } from "./styles";

const Search = () => {

    const [search, setSearch] = useState('');
    const [products, setProducts] = useState<Product[]>([]);
    const [prods, setProds] = useState<Product[]>([]);

    useEffect(() => {

        var updProd = [] as Product[];
        for(var s in sections){
            const data = sections[s].data;
            for(var prod in data)
            {
                updProd.push(data[prod]);
            }
        }
        setProducts(updProd);
        setProds(updProd);
    }, []);

    const updateSearch = (e: string) => {

        setSearch(e);

        if(e === '')
        {
            setProducts(prods);
        }
        else
        {
            const newSection = products.filter(item => item.title.toLowerCase().includes(e.toLowerCase()));
            setProducts(newSection);
        }
    }

    return (
        <View style={styles.container}>
            <SearchBar
                placeholder='Pesquise aqui...'
                onChangeText={(e) => updateSearch(e)}
                search={search}
                setSearch={setSearch}
            />

            <ScrollView contentContainerStyle={styles.searchView}>
                {search !== '' ?
                products.map((item, k) => (
                    <ProductCard data={item} key={k} />
                ))
                :
                <Text style={styles.textMessage}>
                    Digite algo para aparecer aqui.
                </Text>
                }
            </ScrollView>
        </View>
    )
}

export default Search;
