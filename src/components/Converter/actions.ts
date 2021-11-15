import { createAction } from "@reduxjs/toolkit";
import { ConvertRequestModel } from "./models";

export const convertRequest =
  createAction<ConvertRequestModel>("CONVERT_REQUEST");
