import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";
import debounce from "lodash/debounce";
import {
  getSearchKeywords,
  getSearchKeywordsReset,
} from "./redux/actions/getSearchKeywordsAction";
import { connect } from "react-redux";
import { dummyData } from "./utils";
function HomepageSearchbar(props) {
  const { getSearchKeywords, getSearchKeywordsState, getSearchKeywordsReset } =
    props;
  const [searchedKeyword, setSearchedKeyword] = useState("");
  const navigate = useNavigate();
  const [keyWordsList, setKeywordsList] = useState([]);

  useEffect(() => {
    if (getSearchKeywordsState.apiState === "success") {
      let arr = [];
      let response = getSearchKeywordsState?.data;
      response?.map((items) => {
        arr.push(items);
      });
      setKeywordsList(arr);
      getSearchKeywordsReset();
    } else if (getSearchKeywordsState.apiState === "error") {
      setKeywordsList([]);
    }
  }, [getSearchKeywordsState.apiState]);

  const getOptionsDelayed = useCallback(
    debounce((text, callback) => {
      if (text.length >= 2) {
        getSearchKeywords({
          q: text,
        });
        setKeywordsList(dummyData);
      } else {
        setKeywordsList([]);
      }
    }, 500),
    []
  );
  useEffect(() => {
    getOptionsDelayed(searchedKeyword, (filteredOptions) => {
      setKeywordsList(filteredOptions);
    });
  }, [searchedKeyword, getOptionsDelayed]);

  return (
    <>
      <nav className="navbar bg-body-tertiary h-25 w-100 rounded">
        <form className="container-fluid">
          <div className="input-group">
            <span
              className="input-group-text border border-0"
              id="basiborder border-0c-addon1"
            >
              <a className="navbar-brand" href="#">
                <i
                  class="bi bi-search"
                  style={{ marginLeft: "-9px", marginRight: "-22px" }}
                ></i>
              </a>
            </span>

            <input
              type="text"
              className="form-control border border-0"
              placeholder="Search high-resolution images"
              aria-label="Username"
              onChange={(e) => setSearchedKeyword(e.target.value)}
              aria-describedby="basic-addon1"
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
                if (e.key === "Enter" && searchedKeyword) {
                  navigate(`/images?search=${searchedKeyword}`);
                }
              }}
            />
            <span
              className="input-group-text border border-0"
              id="basic-addon1"
            >
              <a className="navbar-brand" href="# ">
                <i class="bi bi-upc-scan" style={{ marginRight: "-22px" }}></i>
              </a>
            </span>
          </div>
        </form>
      </nav>
    </>
  );
}
const mapStateToProps = (state) => ({
  getSearchKeywordsState: state.getSearchKeywordsState,
});
const mapDispatchToProps = (dispatch) => ({
  getSearchKeywords: (params) => dispatch(getSearchKeywords(params)),
  getSearchKeywordsReset: () => dispatch(getSearchKeywordsReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomepageSearchbar);
