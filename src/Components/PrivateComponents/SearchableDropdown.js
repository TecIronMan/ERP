import { useEffect, useState } from "react";
import '../../CSS/SearchableDropdown.css'

function SearchableDropdown({suppliers,setSUpDetails}) {

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSuppliers, setFilteredSuppliers] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  

  useEffect(() => {
    setFilteredSuppliers(
      suppliers.filter((supplier) =>
        supplier.supplier_first_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, suppliers]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsDropdownOpen(true);
    
  };

  const handleSupplierSelect = (supplier) => {
    setSearchTerm(supplier.supplier_first_name);
    setIsDropdownOpen(false);
  setSUpDetails(supplier);
  };


  return (
    <div>
      <div className="form-group autocomplete">
        <input
          type="text"
          placeholder="Search for a supplier"
          value={searchTerm}
          onChange={handleInputChange}
          onClick={() => setIsDropdownOpen(true)}
        />
        {isDropdownOpen && (
          <div className="dropdown-menu">
            {filteredSuppliers.length > 0 ? (
              filteredSuppliers.map((supplier) => (
                <div
                  key={supplier.id}
                  className="dropdown-item"
                  onClick={() => handleSupplierSelect(supplier)}
                >
                  {supplier.supplier_first_name}
                </div>
              ))
            ) : (
              <div className="dropdown-item">No suppliers found</div>
            )}
          </div>
        )}
      </div>
      
    </div>
  )
}

export default SearchableDropdown
