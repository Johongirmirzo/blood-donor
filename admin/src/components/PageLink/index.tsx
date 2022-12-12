import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../styles/UI/Button/index.styled";
import { PageLinkProps } from "./index.types";

const PageLink = ({ LinkIcon, routeTo, linkText }: PageLinkProps) => {
  return (
    <Link to={routeTo}>
      <Button round>
        <LinkIcon />
        {linkText}
      </Button>
    </Link>
  );
};

export default PageLink;
