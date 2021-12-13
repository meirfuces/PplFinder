import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";

import { usePeopleFetch,useFavoriteFetch } from "hooks";

import * as S from "../Home/style";

const Favorite = () => {

  const { favorites, isLoading } = useFavoriteFetch();
  
  const { users } = usePeopleFetch();
  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList  users ={favorites} favorites={favorites} favoritesPage= {true} isLoading={isLoading} />
      </S.Content>
    </S.Home>
  );
};

export default Favorite;
