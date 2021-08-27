import React, { useEffect, useState } from "react";
import { Animated, SafeAreaView, ScrollView, SectionList, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { SectionTitle } from "../../components/SectionTitle";
import { ProductCard } from "../../components/ProductCard";
import { TopTabBar } from "../../components/TopTabBar";
import { Category, CategoryList } from "../../models/Category";
import Api, { CATEGORY_URL, PRODUCT_URL } from "../../services/api";
import { Product } from "../../models/Product";
import { styles } from "./styles";
import ProductCardLoad from "../../components/ProductCardLoad";
import CategoryLoad from "../../components/CategoryLoad";

const Home = () => {

    //#region animate scroll

    const HEADER_HEIGHT = 160;
    const scrollY = new Animated.Value(0);
    const diffClamp = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
    const translateY = diffClamp.interpolate({
        inputRange: [0, HEADER_HEIGHT],
        outputRange: [0, -HEADER_HEIGHT]
    });

    var fList: SectionList<Product, CategoryList> | null;

    //#endregion

    const api = new Api();

    const [categorys, setCategorys] = useState([] as Category[]);
    const [categoryList, setCategoryList] = useState([] as CategoryList[]);

    useEffect(() => {

        const getCategorys = async () => {

            await api.get(CATEGORY_URL).then(res => {
                var cats = res as Category[];
                setCategorys(cats);

                api.get(PRODUCT_URL).then(resp => {

                    var prods = resp as Product[];
                    var catList = cats as CategoryList[];

                    catList.forEach(cat => {
                        cat.data = prods?.filter(x =>
                            x.categoryProducts?.filter(y => y.categoryId == cat.id).length !== undefined &&
                            x.categoryProducts?.filter(y => y.categoryId == cat.id).length > 0
                        );
                    });

                    setCategoryList(catList);
                });
            })
            .catch(err => {
                console.log(err);
            });
        }
        getCategorys();

    }, []);

    return (
        <SafeAreaView>
            <Animated.View
                style={[styles.animatedView, {
                    height: HEADER_HEIGHT,
                    transform: [{translateY: translateY}],
                }]}
            >
                <TopTabBar />

                {categorys.length > 0 ?

                <ScrollView
                    contentContainerStyle={styles.horizontalNavigator}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                >
                    {
                        categorys.map((category, k) => (
                            <RectButton
                                style={styles.btnHorizontalNavigator}
                                onPress={() => fList?.scrollToLocation({
                                    sectionIndex: k,
                                    itemIndex: 0,
                                })}
                                key={k}
                            >
                                <Text style={styles.txtHorizontalNavigator}>
                                    {category.title}
                                </Text>
                            </RectButton>
                        ))
                    }
                </ScrollView>
                : <View style={styles.horizontalNavigatorLoad}>
                    <CategoryLoad />
                </View>}
            </Animated.View>

            {categoryList.length > 0 ?

            <SectionList
                sections={categoryList}
                renderSectionHeader={({section}) =>
                    <SectionTitle data={section} />
                }
                renderItem={({item}) => (
                    <ProductCard data={item} />
                )}
                keyExtractor={(item) => item.id}
                onScroll={(e) => {
                    scrollY.setValue(e.nativeEvent.contentOffset.y)
                }}
                contentContainerStyle={styles.body}
                ref={(node) => fList = node}
            />

            : <View style={styles.body}>
                <ProductCardLoad />
            </View>}
        </SafeAreaView>
    )
}

export default Home;
