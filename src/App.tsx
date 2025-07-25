@@ .. @@
 import React from 'react';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Navbar from './components/Navbar';
 import Footer from './components/Footer';
 import Home from './pages/Home';
-import Blog from './pages/Blog';
 import Contact from './pages/Contact';
 import CV from './pages/CV';
 
 import ProjectHospitality from './pages/projects/ProjectHospitality';
-
-
-
-
+import ProjectSQLOptimization from './pages/projects/ProjectSQLOptimization';
+import ProjectDataWarehouse from './pages/projects/ProjectDataWarehouse';
+import ProjectLoanAnalysis from './pages/projects/ProjectLoanAnalysis';
+import ProjectSQLMigration from './pages/projects/ProjectSQLMigration';
+import ProjectSQLUpgrade from './pages/projects/ProjectSQLUpgrade';
+import ProjectEBankDatabase from './pages/projects/ProjectEBankDatabase';
 
 function App() {
   return (
   )
 }
@@ .. @@
         <Navbar />
         <Routes>
           <Route path="/" element={<Home />} />
-          <Route path="/blog" element={<Blog />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/cv" element={<CV />} />
           
           <Route path="/project/hospitality" element={<ProjectHospitality />} />
-          
-          
-          
-          
+          <Route path="/project/sql-optimization" element={<ProjectSQLOptimization />} />
+          <Route path="/project/data-warehouse" element={<ProjectDataWarehouse />} />
+          <Route path="/project/loan-analysis" element={<ProjectLoanAnalysis />} />
+          <Route path="/project/sql-migration" element={<ProjectSQLMigration />} />
+          <Route path="/project/sql-upgrade" element={<ProjectSQLUpgrade />} />
+          <Route path="/project/ebank-database" element={<ProjectEBankDatabase />} />
         </Routes>
         <Footer />
       </div>