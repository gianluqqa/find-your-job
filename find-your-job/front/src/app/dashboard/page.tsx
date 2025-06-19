'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getUser } from 'src/helpers/authFunctions';

const DashboardGeneralPage = () => {
  const router = useRouter();

  useEffect(() => {
    const user = getUser();

    if (user?.role === 'candidate') {
      router.replace('/dashboard/candidate');
    } else if (user?.role === 'recruiter') {
      router.replace('/dashboard/recruiter');
    } else {
      router.replace('/login');
    }
  }, []);

  return <div className="text-center mt-10">Redirigiendo al dashboard...</div>;
};

export default DashboardGeneralPage;
