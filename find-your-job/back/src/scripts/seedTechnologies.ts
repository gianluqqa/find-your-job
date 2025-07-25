import { AppDataSource } from "../config/data-source";
import { TechnologyDto } from "../dto/technology.dto";
import { Technology } from "../entities/Technology";

const seedTechnologies = async () => {
  try {
    await AppDataSource.initialize();
    const technologyRepository = AppDataSource.getRepository(Technology);

    // Obtenemos todos los valores del enum
    const technologies = Object.values(TechnologyDto);

    for (const techName of technologies) {
      // Verificar si ya existe
      const exists = await technologyRepository.findOneBy({ name: techName });
      if (!exists) {
        const newTech = technologyRepository.create({ name: techName });
        await technologyRepository.save(newTech);
        console.log(`✅ Insertada: ${techName}`);
      } else {
        console.log(`⚠️ Ya existe: ${techName}`);
      }
    }

    console.log("✅ Seeding de technologies completado.");
  } catch (error) {
    console.error("❌ Error al hacer seed de technologies:", error);
  } finally {
    await AppDataSource.destroy(); // Cerramos la conexión
  }
};

seedTechnologies();
