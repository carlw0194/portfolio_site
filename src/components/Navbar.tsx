@@ .. @@
             <button
               onClick={() => scrollToSection('projects')}
               className="text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium"
             >
               Projects
             </button>
-            <Link 
-              to="/blog"
-              className="text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium"
-            >
-              Blog
-            </Link>
             <Link 
               to="/cv"
               className="text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium"
@@ .. @@
               >
                 Projects
               </button>
-              <Link 
-                to="/blog"
-                className="block px-3 py-2 text-gray-700 hover:text-blue-800 transition-colors duration-200"
-                onClick={() => setIsOpen(false)}
-              >
-                Blog
-              </Link>
               <Link 
                 to="/cv"
                 className="block px-3 py-2 text-gray-700 hover:text-blue-800 transition-colors duration-200"