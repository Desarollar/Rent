import IvpDescription from "../components/IvpDescription";
import IvpGrid from "../components/IvpGrid";
import IvpMaps from "../components/IvpMaps";
import IvpReviews from "../components/IvpReviews";
import IvpRules from "../components/IvpRules";
import NavBar from "../components/NavBar.jsx";

import { LiaMedalSolid } from "react-icons/lia";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { PiTranslateBold } from "react-icons/pi";

import OptionsFooter from "../components/OptionsFooter";
import HelpFooter from "../components/HelpFooter";
import IvpEvaluaciones from "../components/IvpEvaluaciones";
import { useParams } from "react-router-dom";

import { useGetPublicationByIdQuery } from "../store/rtk-query";

import { useDispatch } from "react-redux";
import { loadPublicationDetail } from "../store/actions";
import { useEffect } from "react";

function IndividualViewPage(props) {

  const {id} = useParams();

  const dispatch = useDispatch();


  const {data, error, isLoading} = useGetPublicationByIdQuery(id);

  useEffect(()=>{
    if(typeof data !== 'undefined'){
      dispatch(loadPublicationDetail(data))
    }
  },[dispatch, data]);

  return (
    <>
      <div className="hidden sm:block">
        <NavBar />
      </div>

      <div>
        <div className="container mx-4">
          {/* TITULO */}
          <div className="flex items-center">
            <div>
              <PiTranslateBold size={45} />
            </div>
             <div>
              
             </div>
            <h2 className="text-3xl font-semibold my-9 ">
              {data?.title}
              <span className="hidden sm:block">
                {data?.featured}
              </span>
            </h2>
          </div>

          <div className="flex justify-between hidden sm:block">
            <p className="flex items-center">
              <AiFillStar /> 4,89 · 45 evaluaciones · <LiaMedalSolid />{" "}
              Superanfitrión · 墨田区, 東京都, Japón
            </p>
            <div className="flex">
              <button className="btn-share flex items-center mr-4">
                <FiDownload />
                <span className="underline pl-2">Compartir</span>
              </button>
              <button className="btn-share flex items-center mr-10">
                <AiOutlineHeart />
                <span className="underline pl-2">Guardar</span>
              </button>
            </div>
          </div>
        </div>

        <IvpGrid />
        <IvpDescription />
        <IvpMaps />
        <IvpReviews />
        <IvpEvaluaciones />
        <IvpRules />

        <HelpFooter />
        <OptionsFooter />
      </div>
    </>
  );
}

export default IndividualViewPage;
