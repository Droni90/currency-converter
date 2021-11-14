import { createAction } from "@reduxjs/toolkit";
import { ConvertRequestModel } from "./models";

export const connvertRequest =
  createAction<ConvertRequestModel>("CONVERT_REQUEST");
