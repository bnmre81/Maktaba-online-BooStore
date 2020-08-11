import React from "react";
// components
import BookDetail from "../BookDetail";
import BookList from "../BookList";
import Home from "../Home";
import AuthorList from "../AuthorList/index";
import AuthorDetail from "../AuthorDetail/index";

import { Route, Switch } from "react-router";
// Store
import bookStore from "../../stores/bookStore";
import { observer } from "mobx-react";

const Routes = () => {
  return (
    <Switch>
      <Route path="/authors/:authorSlug">
        <AuthorDetail />
      </Route>
      <Route path="/authors">
        <AuthorList />
      </Route>
      <Route exact path="/books/:bookSlug">
        <BookDetail books={books} />
        {/* setBook={setBook} was a prop above */}
      </Route>
      <Route exact path="/books">
        <BookList books={bookStore.books} />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};
export default observer(Routes);
