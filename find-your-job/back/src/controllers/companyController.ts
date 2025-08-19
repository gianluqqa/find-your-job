import { Request, Response } from "express";
import { createCompanyService, getAllCompaniesByUserIdService, getAllCompaniesService, getCompanyByIdService } from "../services/companyService";

// Encargado de ejecutar la funcion para crear una compañia (con filtrado de que mostrar y que no).
export const createCompanyController = async (req: Request, res: Response) => {
  try {
    const { name, image, description, category, userId } = req.body;
    const newCompany = await createCompanyService({ name, image, description, category, userId });

    const filteredRecruiter = {
      id: newCompany.recruiter.id,
      name: newCompany.recruiter.name,
    };

    return res.status(201).json({
      ...newCompany,
      recruiter: filteredRecruiter,
    });
  } catch (error) {
    console.error("❌ Error al crear compañía:", error);
    return res.status(500).json({ message: "Error al crear compañía", error: (error as Error).message });
  }
};

// Encargado de ejecutar la funcion para obtener todos los usuarios.
export const getAllCompaniesController = async (req: Request, res: Response) => {
  try {
    const companies = await getAllCompaniesService();

    const companiesFiltered = companies.map((company) => {
      const filteredRecruiter = {
        id: company.recruiter.id,
        name: company.recruiter.name,
        email: company.recruiter.email,
        role: company.recruiter.role,
      };
      return { ...company, recruiter: filteredRecruiter };
    });

    res.json(companiesFiltered);
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

    const filteredRecruiter = {
      id: company.recruiter.id,
      name: company.recruiter.name,
      email: company.recruiter.email,
      role: company.recruiter.role,
    };

    res.status(200).json({
      ...company,
      recruiter: filteredRecruiter,
    });
  } catch (error) {
    console.error("❌ Error al obtener compañía por ID:", error);
    res.status(404).json({ message: (error as Error).message });
  }
};

// Encargado de ejecutar la funcion para obtener todas las companias de un recruiter en especifico.
export const getAllCompaniesByUserIdController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const companies = await getAllCompaniesByUserIdService(userId);

    const filteredCompanies = companies.map((company) => ({
      ...company,
      recruiter: {
        id: company.recruiter.id,
        name: company.recruiter.name,
      },
    }));

    return res.status(200).json(filteredCompanies);
  } catch (error) {
    console.error("❌ Error al obtener todas las compañías del usuario:", error);
    return res.status(500).json({ message: "Error al obtener todas las compañías del usuario" });
  }
};
