import React, { useState, useMemo } from 'react';
import { Search, CheckCircle2, AlertTriangle, XCircle, ShoppingBag, ShieldCheck, Filter } from 'lucide-react';
import medicineData from '../data/medicineStock.json';
import { MedicineItem, MedicineStatus } from '../types';

interface MedicineStockCheckerProps {
  onOrderClick?: (medicineName: string) => void;
  compactMode?: boolean;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({
  onOrderClick,
  compactMode = false,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const medicines = medicineData as MedicineItem[];

  const categories = useMemo(() => {
    const set = new Set(medicines.map((m) => m.category));
    return ['All', ...Array.from(set)];
  }, [medicines]);

  const filteredMedicines = useMemo(() => {
    return medicines.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesStatus = statusFilter === 'All' || item.status === statusFilter;

      return matchesSearch && matchesCat && matchesStatus;
    });
  }, [medicines, searchQuery, selectedCategory, statusFilter]);

  const getStatusBadge = (status: MedicineStatus) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-[#0A8F6A]" />
            Available
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
            <AlertTriangle className="w-3.5 h-3.5 mr-1" />
            Limited Stock
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
            <XCircle className="w-3.5 h-3.5 mr-1" />
            Out of Stock
          </span>
        );
    }
  };

  return (
    <div id="medicine-stock-checker" className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden p-6 sm:p-8">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center space-x-2 text-[#0A8F6A] dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Instant Stock Verification</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Medicine Stock Checker
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Search live store inventory in Gewalbigha, Gaya before visiting or ordering.
          </p>
        </div>

        {/* Status legendary counts */}
        <div className="flex items-center space-x-3 text-xs font-medium">
          <span className="flex items-center space-x-1 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800">
            <span className="w-2 h-2 rounded-full bg-[#0A8F6A]"></span>
            <span>In Stock: {medicines.filter((m) => m.status === 'Available').length}</span>
          </span>
          <span className="flex items-center space-x-1 bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 px-3 py-1.5 rounded-lg border border-amber-200 dark:border-amber-800">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span>Limited: {medicines.filter((m) => m.status === 'Limited Stock').length}</span>
          </span>
        </div>
      </div>

      {/* Search Bar & Filters */}
      <div className="space-y-4 mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            id="medicine-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by medicine name, brand, or category (e.g. Dolo, Pan 40, Omron, Baby)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-base focus:ring-2 focus:ring-[#0A8F6A]/20 focus:outline-none transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none text-xs">
          <span className="text-slate-500 font-semibold flex items-center shrink-0 mr-1">
            <Filter className="w-3.5 h-3.5 mr-1" /> Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full font-semibold shrink-0 transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0A8F6A] text-white shadow-md shadow-[#0A8F6A]/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Inventory List */}
      <div className="space-y-3">
        {filteredMedicines.length === 0 ? (
          <div className="text-center py-10 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
            <p className="text-slate-600 dark:text-slate-400 text-base font-medium">
              No matching medicines or devices found for "{searchQuery}".
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Need a non-catalog medicine? Call or WhatsApp us directly to procure it for you!
            </p>
            <button
              onClick={() => onOrderClick && onOrderClick(searchQuery || 'Custom Medicine Request')}
              className="mt-4 px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Order via WhatsApp
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredMedicines.slice(0, compactMode ? 6 : filteredMedicines.length).map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base leading-snug">
                      {item.name}
                    </h4>
                    {getStatusBadge(item.status)}
                  </div>

                  <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                      {item.brand}
                    </span>
                    <span>•</span>
                    <span>{item.dosageForm}</span>
                    <span>•</span>
                    <span>{item.packSize}</span>
                  </div>

                  {item.requiresPrescription && (
                    <div className="inline-block text-[11px] font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded border border-rose-200 dark:border-rose-900 mb-2">
                      Rx Required (Doctor Prescription Needed)
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-700/50 flex items-center justify-between mt-2">
                  <div>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-lg font-bold text-slate-900 dark:text-white">
                        ₹{item.discountedPrice || item.mrp}
                      </span>
                      {item.discountedPrice && (
                        <span className="text-xs text-slate-400 line-through">₹{item.mrp}</span>
                      )}
                    </div>
                    <p className="text-[10px] text-slate-400">Exp: {item.expiry}</p>
                  </div>

                  <button
                    onClick={() => onOrderClick && onOrderClick(item.name)}
                    disabled={item.status === 'Out of Stock'}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                      item.status === 'Out of Stock'
                        ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:scale-[1.02]'
                    }`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
