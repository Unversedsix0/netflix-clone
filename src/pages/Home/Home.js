import React from "react";
import categories from "../../api";
import { Banner } from "../../components";
import { Nav } from "../../components/Nav/Nav";
import { Row } from "../../components/Row/Row";


export const Home = () => {
  return (
    <div>
      <Nav />
      <Banner />
      {categories.map((category) => {
        return (
          <Row
            key={category.name}
            title={category.title}
            path={category.path}
            isLarge={category.isLarge}
          />
        );
      })}
    </div>
  );
};
