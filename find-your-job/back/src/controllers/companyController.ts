import { Request, Response } from "express";
import { createCompanyService, getAllCompaniesService, getCompanyByIdService } from "../services/companyService";

// Encargado de ejecutar la funcion para crear una compañia.
export const createCompanyController = async (req: Request, res: Response) => {
  try {
    const { name, image, description, category } = req.body;
    console.log("📥 Datos recibidos para crear compañía:", req.body);

    const newCompany = await createCompanyService({ name, image, description, category });

    res.status(201).json(newCompany);
  } catch (error) {
    console.error("❌ Error al crear compañía:", error);
    res.status(500).json({ message: "Error al crear compañía", error: (error as Error).message });
  }
};

// Encargado de ejecutar la funcion para obtener todos los usuarios.
export const getAllCompaniesController = async (req: Request, res: Response) => {
  try {
    const companies = await getAllCompaniesService();
    res.json(companies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching companies" });
  }
};

// Encargado de ejecutar la funcion para obtener una compañia especifica por ID.
export const getCompanyByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const company = await getCompanyByIdService(id);
    res.status(200).json(company);
  } catch (error) {
    console.error("❌ Error al obtener compañía por ID:", error);
    res.status(404).json({ message: (error as Error).message });
  }
};
