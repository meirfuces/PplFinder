// import React, { useEffect, useState } from "react";
// import Text from "components/Text";
// import Spinner from "components/Spinner";
// import CheckBox from "components/CheckBox";
// import IconButton from "@material-ui/core/IconButton";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import * as S from "./style";
// import { Favorite } from "pages";
// import axios from "axios";

// const UserList = ({ users,favorites, isLoading }) => {
//   const [hoveredUserId, setHoveredUserId] = useState();

//   const [CountriesState, setCountriesState] = useState([]);
//   const [UsersState, setUsersState] = useState([]);
//   const [FavoriteState, setFavoriteState] = useState([]);

//   const handleMouseEnter = (index) => {
//     setHoveredUserId(index);
 
//   };

//   useEffect(() => {
//     setFavoriteState([...favorites])
//     setUsersState([...users]);
//     console.log();
//   },[])

//   // LifeCycle when CountriesState or users change
//   useEffect(() => {
    

//     if(CountriesState.length===0) setUsersState([...users]);
//     else{
//       //if there is Counties to filter, do filter on user with country in CountriesStateState
//       setUsersState(users.filter(user=>CountriesState.includes(user.location.country)))
//     }
//   }, [CountriesState,users])
//   const handleMouseLeave = () => {
//     setHoveredUserId();

//   };
 
//   const addCountryFilter=(country)=>{
    
//     //if not include add it
//     if(!CountriesState.includes(country))    setCountriesState([...CountriesState,country])
   
// //if itsn't includes delete it
//     else 
//     setCountriesState(CountriesState.filter(val => val!== country)) 
//   }

//    async function addFavorite (user){
  

    
//    if (FavoriteState.length===0 || !FavoriteState.some(favorite=> favorite.login.uuid=== user.login.uuid)){
//       console.log('duplic');

   
//     setFavoriteState([...FavoriteState,user]);
//     console.log('favoriteState', [...FavoriteState,user]);
//       const res1 = await axios.delete('https://db-ppl-default-rtdb.firebaseio.com/favorites.json');
//     const res2 = await axios.post('https://db-ppl-default-rtdb.firebaseio.com/favorites.json',[...FavoriteState,user]);
//    }
//     else{
    
//       setFavoriteState(FavoriteState.filter(val => val.login.uuid!== user.login.uuid))
//       // const res = await axios.delete('https://db-ppl-default-rtdb.firebaseio.com/favorites.json',user);
//       // console.log('delete');
//     }
//     console.log(FavoriteState);
//     console.log('post');

//   };
//   // const countriesCheckBox =['Brazil','Australia','Canada','Germany','United States'];
//   return (
//     <S.UserList>
//       <S.Filters>
//         <CheckBox onChange={addCountryFilter} value="Brazil" label="Brazil" />
//         <CheckBox onChange={addCountryFilter} value="Australia" label="Australia" />
//         <CheckBox onChange={addCountryFilter} value="Canada"  label="Canada" />
//         <CheckBox onChange={addCountryFilter} value="Germany" label="Germany" />
//         <CheckBox onChange={addCountryFilter} value="United States" label="United States" />
//       </S.Filters>
//       <S.List>
//         {UsersState.map((user, index) => {
//           return (
//             <S.User
         
//               key={index}
//               onMouseEnter={() => handleMouseEnter(index)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <S.UserPicture src={user?.picture.large} alt="" />
//               <S.UserInfo>
//                 <Text size="22px" bold>
//                   {user?.name.title} {user?.name.first} {user?.name.last}
//                 </Text>
//                 <Text size="14px">{user?.email}</Text>
//                 <Text size="14px">
//                   {user?.location.street.number} {user?.location.street.name}
//                 </Text>
//                 <Text size="14px">
//                   {user?.location.city} {user?.location.country}
//                 </Text>
//               </S.UserInfo>
//               <S.IconButtonWrapper isVisible={FavoriteState.includes(user) || index===hoveredUserId}>
//                 <IconButton    onClick ={()=> addFavorite(user)}>
//                   <FavoriteIcon color="error" />
//                 </IconButton>
//               </S.IconButtonWrapper>
//             </S.User>
//           );
//         })}
//         {isLoading && (
//           <S.SpinnerWrapper>
//             <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
//           </S.SpinnerWrapper>
//         )}
//       </S.List>
//     </S.UserList>
//   );
// };

// export default UserList;
