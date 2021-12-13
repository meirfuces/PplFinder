import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch ,useFavoriteFetch} from "hooks";
import * as S from "./style";

const Home = () => {
  const { users, isLoading } = usePeopleFetch();
  const { favorites } = useFavoriteFetch();
  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList users={users} favorites={favorites} favoritesPage={false} isLoading={isLoading} />
      </S.Content>
    </S.Home>
  );
};

export default Home;
