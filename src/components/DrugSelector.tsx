import React, { useState, useRef, useEffect } from 'react';
import { Drug } from '../data/drugs';

interface DrugSelectorProps {
  drugs: Drug[];
  selectedDrug: string;
  onChange: (value: string) => void;
  concentration: string;
  onConcentrationChange: (value: string) => void;
}

const DrugSelector: React.FC<DrugSelectorProps> = ({
  drugs,
  selectedDrug,
  onChange,
  concentration,
  onConcentrationChange,
}) => {
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
      <h2>Drug Information</h2>
      <div className="drug-info-row" style={{flexWrap: 'wrap'}}>
        <div className="drug-info-col" style={{minWidth: 0, flex: 1}}>
          <label htmlFor="drug-dropdown">Drug Name</label>
          <div
            className="custom-dropdown"
            onClick={() => setOpen(v => !v)}
            tabIndex={0}
            aria-haspopup="listbox"
            aria-expanded={open}
            id="drug-dropdown"
            role="combobox"
            aria-controls="drug-dropdown-list"
            style={{width: '100%'}}
          >
            <div className={`dropdown-selected${open ? ' open' : ''}`}>{selectedLabel}
              <span className={`dropdown-caret${open ? ' open' : ''}`}></span>
            </div>
            {open && (
              <div className="dropdown-menu" id="drug-dropdown-list" role="listbox">
                <input
                  type="text"
                  placeholder="Search drug..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="drug-search-input"
                  autoFocus
                  onClick={e => e.stopPropagation()}
                  aria-label="Search drug"
                />
                <div className="dropdown-options">
                  {filteredDrugs.length === 0 && <div className="dropdown-option disabled">No results</div>}
                  {filteredDrugs.map(drug => (
                    <div
                      key={drug.value}
                      className={`dropdown-option${selectedDrug === drug.value ? ' selected' : ''}`}
                      onClick={e => { e.stopPropagation(); handleSelect(drug.value); }}
                      role="option"
                      aria-selected={selectedDrug === drug.value}
                    >
                      {drug.label}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="drug-info-col" style={{minWidth: 0, flex: 1}}>
          <label htmlFor="vial-concentration">Vial Concentration (mg/ml)</label>
          <input
            type="number"
            name="concentration"
            id="vial-concentration"
            value={concentration}
            onChange={e => onConcentrationChange(e.target.value)}
            min="0"
            step="any"
            required
            className="vial-concentration-inline"
            style={{width: '100%'}}
          />
        </div>
      </div>
    </div>
  );
};

export default DrugSelector;
