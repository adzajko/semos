import StyledHomeSection from '../../styled-components/StyledHomeSection';
import MoeKopce from '../../styled-components/AppButton';
import { UppercasedParagraph } from './StyledHome';
import { useState, useEffect, Fragment, useReducer } from 'react';
import { axiosAllPosts } from '../../services/posts';

// const sampleAction = {
//   type: POST_ACTION_TYPES.CALL_API,
//   payload: null,
// };
// Actions, Dispatches, Reducers

const POST_ACTION_TYPES = {
  CALL_API: 'CALL_API',
  API_SUCCESS: 'API_SUCCESS',
  API_ERROR: 'API_ERROR',
};

const postsReducer = (state, action) => {
  switch (action.type) {
    case POST_ACTION_TYPES.CALL_API: {
      return { ...state, isLoading: true, error: null };
    }
    case POST_ACTION_TYPES.API_SUCCESS: {
      return { ...state, isLoading: false, error: null, posts: action.payload };
    }
    case POST_ACTION_TYPES.API_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

// const newArary = [1, 2, 3, 4, 5, 6].reduce((accumulator, currentValue) => {
//   accumulator += currentValue;
// });

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

const Home = () => {
  const [postsState, dispatchPostsState] = useReducer(
    postsReducer,
    initialState
  );

  useEffect(() => {
    dispatchPostsState({ type: POST_ACTION_TYPES.CALL_API });
    axiosAllPosts()
      .then((data) => {
        dispatchPostsState({
          type: POST_ACTION_TYPES.API_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatchPostsState({ type: POST_ACTION_TYPES.API_ERROR, payload: err });
      });
  }, []);
  return (
    <StyledHomeSection type>
      <h2 className="custom-h2">Zdravo Svet(lana)!</h2>
      <UppercasedParagraph>UppErCase Me PlS </UppercasedParagraph>
      <MoeKopce textColor="rgba(0, 0, 0, 0.9)" bgColor="yellow">
        Predizborna Kampanja
      </MoeKopce>
      {postsState?.error
        ? 'Error Occured!'
        : postsState?.posts?.map((post) => (
            <Fragment key={post.id}>
              <h2>{post.title}</h2>
            </Fragment>
          ))}
    </StyledHomeSection>
  );
};

export default Home;
