import React, { useState, useRef, useEffect } from 'react';
import { Drug } from '../data/drugs';

interface DrugSelectorProps {
  drugs: Drug[];
  selectedDrug: string;
  onChange: (value: string) => void;
}

const DrugSelector: React.FC<DrugSelectorProps> = ({ drugs, selectedDrug, onChange }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredDrugs = drugs.filter(drug =>
    drug.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    onChange(value);
    setOpen(false);
    setSearch('');
  };

  const selectedLabel = drugs.find(d => d.value === selectedDrug)?.label || 'Select a drug';

  return (
    <div className="drug-selector section-box" ref={containerRef}>
      <h2>Drug Selection</h2>
      <div className="custom-dropdown" onClick={() => setOpen(v => !v)} tabIndex={0}>
        <div className={`dropdown-selected${open ? ' open' : ''}`}>
          {selectedLabel}
          <span className={`dropdown-caret${open ? ' open' : ''}`}></span>
        </div>
        {open && (
          <div className="dropdown-menu">
            <input
              type="text"
              placeholder="Search drug..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="drug-search-input"
              autoFocus
              onClick={e => e.stopPropagation()}
            />
            <div className="dropdown-options">
              {filteredDrugs.length === 0 && <div className="dropdown-option disabled">No results</div>}
              {filteredDrugs.map(drug => (
                <div
                  key={drug.value}
                  className={`dropdown-option${selectedDrug === drug.value ? ' selected' : ''}`}
                  onClick={e => { e.stopPropagation(); handleSelect(drug.value); }}
                >
                  {drug.label}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DrugSelector;
