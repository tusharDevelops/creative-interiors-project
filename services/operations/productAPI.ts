"use client";

import { toast } from "sonner";
import { apiConnector } from "../apiConnector";
import { productEndpoints } from "../apiEndpoint";

const {
  GET_CATEGORIES_API,
  GET_CATEGORY_BY_SLUG_API,
  GET_SUB_CATEGORIES_API,
  GET_MATERIALS_BY_CATEGORY_API,
  GET_SELECTABLE_MATERIALS_API,
  GET_CATALOGUES_BY_CATEGORY_API,
  GET_CATALOGUE_BY_ID_API,
} = productEndpoints;

/* =========================================================
   GET ALL CATEGORIES
========================================================= */
export function getProductCategories() {
  return async (dispatch: any) => {
    try {
      const response = await apiConnector(
        "GET",
        GET_CATEGORIES_API
      );
      return response.data;
    } catch (error: any) {
      console.error("GET CATEGORIES ERROR", error);
      toast("Failed to load categories");
      throw error;
    }
  };
}

/* =========================================================
   GET CATEGORY BY SLUG
========================================================= */
export function getCategoryBySlug(slug: string) {
  return async (dispatch: any) => {
    try {
      const response = await apiConnector(
        "GET",
        GET_CATEGORY_BY_SLUG_API(slug)
      );
      return response.data;
    } catch (error: any) {
      console.error("GET CATEGORY ERROR", error);
      toast("Failed to load category");
      throw error;
    }
  };
}

/* =========================================================
   GET SUB CATEGORIES
========================================================= */
export function getSubCategories(parentId: string) {
  return async (dispatch: any) => {
    try {
      const response = await apiConnector(
        "GET",
        GET_SUB_CATEGORIES_API(parentId)
      );
      return response.data;
    } catch (error: any) {
      console.error("GET SUB CATEGORIES ERROR", error);
      toast("Failed to load sub categories");
      throw error;
    }
  };
}

/* =========================================================
   GET MATERIALS (ALL)
========================================================= */
export function getMaterialsByCategory(categoryId: string) {
  return async (dispatch: any) => {
    try {
      const response = await apiConnector(
        "GET",
        GET_MATERIALS_BY_CATEGORY_API(categoryId)
      );
      return response.data;
    } catch (error: any) {
      console.error("GET MATERIALS ERROR", error);
      toast("Failed to load materials");
      throw error;
    }
  };
}

/* =========================================================
   GET SELECTABLE MATERIALS (USER CHOICE)
========================================================= */
export function getSelectableMaterials(categoryId: string) {
  return async (dispatch: any) => {
    try {
      const response = await apiConnector(
        "GET",
        GET_SELECTABLE_MATERIALS_API(categoryId)
      );
      return response.data;
    } catch (error: any) {
      console.error("GET SELECTABLE MATERIALS ERROR", error);
      toast("Failed to load materials");
      throw error;
    }
  };
}

/* =========================================================
   GET CATALOGUES BY CATEGORY
========================================================= */
export function getCataloguesByCategory(categoryId: string) {
  return async (dispatch: any) => {
    try {
      const response = await apiConnector(
        "GET",
        GET_CATALOGUES_BY_CATEGORY_API(categoryId)
      );
      return response.data;
    } catch (error: any) {
      console.error("GET CATALOGUES ERROR", error);
      toast("Failed to load designs");
      throw error;
    }
  };
}

/* =========================================================
   GET SINGLE CATALOGUE
========================================================= */
export function getCatalogueById(catalogueId: string) {
  return async (dispatch: any) => {
    try {
      const response = await apiConnector(
        "GET",
        GET_CATALOGUE_BY_ID_API(catalogueId)
      );
      return response.data;
    } catch (error: any) {
      console.error("GET CATALOGUE ERROR", error);
      toast("Failed to load product");
      throw error;
    }
  };
}
