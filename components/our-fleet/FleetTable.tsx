"use client";

import React, { useState, useMemo } from 'react';
import { fleetList } from '@/data/fleet';

export default function FleetTable() {
  const [managerFilter, setManagerFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [builtFilter, setBuiltFilter] = useState('');

  // Extract unique values for filters
  const managers = useMemo(() => Array.from(new Set(fleetList.map(v => v.manager))).sort(), []);
  const types = useMemo(() => Array.from(new Set(fleetList.map(v => v.type))).sort(), []);
  const builtYears = useMemo(() => Array.from(new Set(fleetList.map(v => v.built))).sort((a, b) => parseInt(b) - parseInt(a)), []);

  const handleReset = () => {
    setManagerFilter('');
    setTypeFilter('');
    setBuiltFilter('');
  };

  const filteredFleet = useMemo(() => {
    return fleetList.filter(v => {
      if (managerFilter && v.manager !== managerFilter) return false;
      if (typeFilter && v.type !== typeFilter) return false;
      if (builtFilter && v.built !== builtFilter) return false;
      return true;
    });
  }, [managerFilter, typeFilter, builtFilter]);

  return (
    <div className="layout-fleet-list layout-page layout-root">
      <div className="layout-inner">
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="layout-row row u-gy-2">
              <div className="layout-column col-12 col-lg-auto">
                <div className="content-width">
                  <p className="h5 u-text-color-primary layout-fleet-list-filter-label" style={{ marginTop: '0.5rem' }}>Filter By:</p>
                </div>
              </div>
              <div className="layout-column col-12 col-lg">
                <div className="row u-gy-4">
                  <div className="form-group col-auto u-mb-0">
                    <select
                      name="manager"
                      className="form-control"
                      value={managerFilter}
                      onChange={(e) => setManagerFilter(e.target.value)}
                    >
                      <option value="">Manager / Ownership</option>
                      {managers.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>
                  <div className="form-group col-auto u-mb-0">
                    <select
                      name="vessel_type"
                      className="form-control"
                      value={typeFilter}
                      onChange={(e) => setTypeFilter(e.target.value)}
                    >
                      <option value="">Vessel Type</option>
                      {types.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="form-group col-auto u-mb-0">
                    <select
                      name="built_year"
                      className="form-control"
                      value={builtFilter}
                      onChange={(e) => setBuiltFilter(e.target.value)}
                    >
                      <option value="">Year Built</option>
                      {builtYears.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                  </div>
                </div>
              </div>
              <div className="layout-column col-auto u-ml-lg-auto u-mt-8 u-mt-lg-0" style={{ display: 'flex', gap: '1rem' }}>
                <button
                  type="button"
                  className="button button-outline-secondary"
                  onClick={handleReset}
                >
                  <span>Reset Filters</span>
                  <i className="icon icon-times ">
                    <svg viewBox="0 0 320 512" width="14" height="14" fill="currentColor">
                      <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
                    </svg>
                  </i>
                </button>
              </div>
            </div>
          </form>
          
          <div className="spacer spacer-small"></div>
          
          <div style={{ overflowX: 'auto' }}>
            <table className="table-datatable table table-fleet-list" style={{ width: '100%', minWidth: '800px', borderCollapse: 'collapse', borderTop: '2px solid #007236' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6' }}>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 'bold' }}>Vessel</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 'bold' }}>Built</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 'bold' }}>IMO</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 'bold' }}>Type</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 'bold' }}>Flag</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 'bold' }}>Manager</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 'bold' }}>SDWT</th>
                </tr>
              </thead>
              <tbody className="row-hover">
                {filteredFleet.length > 0 ? (
                  filteredFleet.map((vessel, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #eaeaea', transition: 'background-color 0.2s' }}>
                      <td style={{ padding: '1rem', color: '#007236', fontWeight: 600 }}>{vessel.vessel}</td>
                      <td style={{ padding: '1rem' }}>{vessel.built}</td>
                      <td style={{ padding: '1rem' }}>{vessel.imo}</td>
                      <td style={{ padding: '1rem' }}>{vessel.type}</td>
                      <td style={{ padding: '1rem' }}>{vessel.flag}</td>
                      <td style={{ padding: '1rem' }}>{vessel.manager}</td>
                      <td style={{ padding: '1rem' }}>{vessel.sdwt}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
                      No vessels match your selected filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
