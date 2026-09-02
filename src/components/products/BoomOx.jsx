import { motion } from 'framer-motion';
import { ShieldCheck, Droplet, CheckCircle2, Info, Activity, Settings, Award } from 'lucide-react';

const ProductsPage = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50 relative overflow-hidden min-h-screen">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full glass border-brand-emerald/30 mb-6"
          >
            <span className="text-brand-emerald font-semibold tracking-wider text-sm uppercase">
              Patented Co-treatment Water Conditioner
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-bold text-brand-navy mb-6 tracking-tight"
          >
            BOOM-<span className="text-gradient">OX</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-3xl mx-auto text-xl leading-relaxed"
          >
            An advanced, patented Israeli Technology-based Water Improver. It replaces all existing solutions available for water treatment & protects livestock from all water-borne challenges.
          </motion.p>
        </div>

        {/* Essential Context */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-navy rounded-3xl p-8 md:p-12 shadow-2xl mb-24 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-magenta/20 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-emerald/20 rounded-full blur-[80px]"></div>
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h3 className="text-3xl font-heading font-bold text-white mb-6">Why Water Quality Matters</h3>
              <ul className="space-y-4">
                {[
                  "WATER stands out to be the most essential element in our lives as the animal body constitutes 60% of water.",
                  "Water is MOST essential NUTRIENT & Least FOCUSED.",
                  "80% of global diseases are water borne, arising from consumption of unsafe water, inadequate sanitation and poor hygiene.",
                  "2.2 billion people use without safely managed water (WHO)."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Droplet className="text-brand-emerald mt-1 shrink-0" size={20} />
                    <span className="text-slate-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
              <h4 className="text-2xl font-bold text-white mb-4">Description</h4>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-magenta mt-1 shrink-0" size={18} />
                  <span>Patented and robust innovative water treatment machine for Hardness, ORP (ClO2) & pH for 24*7 action.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-magenta mt-1 shrink-0" size={18} />
                  <span>Engineering marvel for water treatment!</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-magenta mt-1 shrink-0" size={18} />
                  <span>It supports to reduce economic impact due to poor quality water.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Technical Specifications & ORP */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
              <h3 className="text-3xl font-heading font-bold text-brand-navy mb-8 flex items-center gap-3">
                <Settings className="text-brand-emerald" size={32} />
                Technical Specifications
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-brand-magenta mb-3">Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-700">
                    <li>• Loaded Fuzzy Logic (Patent Pending)</li>
                    <li>• Accurate ORP Controlled Dosing</li>
                    <li>• Specially Designed Activator Chamber</li>
                    <li>• Auto Voltage Regulator</li>
                    <li>• 3.5" LCD display</li>
                    <li>• IoT Enabled Process Monitoring</li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <div>
                    <h4 className="text-lg font-bold text-brand-magenta mb-2">Dosing Pump</h4>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li><strong>Electrical:</strong> 230 V AC</li>
                      <li><strong>Tubing:</strong> 4/6 mm</li>
                      <li><strong>Dosing Rate:</strong> 3 LPH @ 4 Kg/cm2</li>
                      <li><strong>Protection:</strong> IP65</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-magenta mb-2">ORP & pH Sensor</h4>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li><strong>ORP Range:</strong> -1000 to +1000 mV</li>
                      <li><strong>pH Range:</strong> 0-14</li>
                      <li><strong>Body Material:</strong> ABS</li>
                      <li><strong>Cable length:</strong> 5 meters</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-brand-navy to-[#05081c] rounded-3xl p-8 shadow-xl text-white h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-emerald/20 rounded-full blur-[50px]"></div>
              
              <h3 className="text-3xl font-heading font-bold mb-6 flex items-center gap-3">
                <Activity className="text-brand-magenta" size={32} />
                PPM vs ORP
              </h3>
              <ul className="space-y-3 mb-8 text-sm text-slate-300">
                <li>• <strong>ORP</strong> stands for Oxidation Reduction Potential (measured in mV). It measures the water's potential for oxidizers to steal electrons.</li>
                <li>• Without knowing ORP, we don't know how "effective" the disinfectant is.</li>
                <li>• Chlorine PPM measurement is an old, inappropriate method showing only residue. ORP is the WHO-recommended standard showing active chlorine dioxide effectiveness.</li>
              </ul>

              <h4 className="text-xl font-bold mb-4 text-brand-emerald flex items-center gap-2">
                <Award size={20} /> Competitive Benefits
              </h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Only Patented & FDA approved product ensuring safety & consistency.</li>
                <li>• Certifications: GMP, WHOGMP, ISO and HALAL.</li>
                <li>• Highest Purity (&gt;99%) with virtually no harmful DBPs.</li>
                <li>• Optimum safe concentrations with no explosion hazards.</li>
                <li>• Proven performance in 3000+ poultry farms across India.</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Modus Operandi Table */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-center text-brand-navy mb-12">
            Boom-Ox <span className="text-gradient">Modus Operandi</span>
          </h3>
          <div className="overflow-x-auto rounded-2xl shadow-xl border border-slate-200">
            <table className="w-full text-left bg-white border-collapse text-sm">
              <tbody className="text-slate-700">
                {[
                  ["1", "Water Inlet", "At this point we install the machine. Common inlet pipe from tank to whole farm."],
                  ["2", "Water Conditioner", "Neutralises majority ions, metals and hardness causing agents."],
                  ["3", "Flow Sensor", "Checks flow of water for accurate dosing of medicines."],
                  ["4", "Pressure Gauge", "Maintains water pressure."],
                  ["5", "Chlorine DiOxide solutions", "Solutions fill & refill on signal. Calibrated with the machine's brain for automated dosing."],
                  ["6", "ORP Sensor", "Maintains desired ORP (650+ mV) as set in device."],
                  ["7", "pH solutions", "Acidifier solutions that fill on signal for automated dosing."],
                  ["8", "pH Sensor", "Maintains desired pH (5.8-6.0) as set in device."],
                  ["9", "IoT Device", "Indicator of all parameters, sends notification messages. Monitored from start to last shed."],
                  ["10", "Control Panel/Brain", "The actual brain of the machine. Receives signals and executes patented commands."],
                  ["11", "Best ROI", "Cost of medicines is almost equal to existing price but gives much better ROI than traditional ways."],
                  ["12", "Hardware Build", "Machine is well assembled, dust proof, water/rodent resistant. Compact (fits on a table) and mounts easily on walls. Maintenance free (minor quarterly sensor calibration)."],
                  ["13", "Comprehensive", "User can replace all available solutions for water treatment including pipeline flushing & cleaning."],
                  ["14", "Medication Mode", "During vaccination, users can stop sensors and use normal non-medicated water from the same machine."],
                  ["15", "Support", "Company engineer assists with 1st installation until smooth operations are achieved."],
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="p-4 border-b border-r border-slate-200 font-bold text-brand-emerald w-12 text-center">{row[0]}</td>
                    <td className="p-4 border-b border-r border-slate-200 font-bold text-brand-navy w-48">{row[1]}</td>
                    <td className="p-4 border-b border-slate-200">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Uniqueness & How it Works */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 h-full">
              <h3 className="text-3xl font-heading font-bold text-brand-navy mb-8 flex items-center gap-3">
                <ShieldCheck className="text-brand-emerald" size={32} />
                Uniqueness of Boom-Ox
              </h3>
              <ul className="space-y-4">
                {[
                  "Boom-Ox ClO2 can replace water disinfectant, sanitizer and other solution after discussion with our expert.",
                  "A patented combination of Water Disinfectant and sanitizer.",
                  "Maintain ORP & pH continuously: 24 * 7.",
                  "All in one patented solution for water treatment, we call it \"Water Doctor\".",
                  "It kills 99.99% water born infections and insuring 100% safe and potable water for livestock. Best in class and economical.",
                  "Boom-Ox covers most of the physical, chemical and biological treatment aspects of water."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-emerald/20 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-brand-emerald"></div>
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-brand-navy to-[#05081c] rounded-3xl p-8 shadow-xl text-white h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-magenta/30 rounded-full blur-[50px]"></div>
              
              <h3 className="text-3xl font-heading font-bold mb-8">How it Works</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Penetrates the cell wall and destructs RNA of micro organism.",
                  "Causes Oxidation of Amino Micro Organism.",
                  "Kills Micro organisms even when they are inactive.",
                  "Removes Biofilm faster than other solutions.",
                  "Causes oxidation of micro-organism amino acids leading to its destruction."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-magenta shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-xl font-bold mb-4 text-brand-emerald">Why Boom-Ox</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Very Stable & sustain upto 24 Hrs+</li>
                <li>• Highly Soluble Like Despines</li>
                <li>• pH Independent</li>
                <li>• Lowest CT Value and Fast Acting</li>
                <li>• Acts as Sterilant (Kills all Organisms Like Bacteria, Viruses, Algae as well as Fungi)</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Chlorine vs Boom-Ox Comparison Table */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-center text-brand-navy mb-12">
            Chlorine vs <span className="text-gradient">Boom-Ox</span>
          </h3>
          <div className="overflow-x-auto rounded-2xl shadow-xl border border-slate-200">
            <table className="w-full text-left bg-white border-collapse">
              <thead>
                <tr>
                  <th className="bg-slate-100 p-6 text-xl font-bold text-slate-700 w-1/2 border-b border-r border-slate-200">CHLORINE</th>
                  <th className="bg-brand-emerald/10 p-6 text-xl font-bold text-brand-navy w-1/2 border-b border-slate-200">Boom-Ox (Chlorine Dioxide ClO2)</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 text-sm">
                <tr>
                  <td className="p-6 border-b border-r border-slate-200">Slower E-Coli distraction.</td>
                  <td className="p-6 border-b border-slate-200 bg-brand-emerald/5 font-medium">Faster E-coli distraction due to 5e- (electron) exchange from ClO2.</td>
                </tr>
                <tr>
                  <td className="p-6 border-b border-r border-slate-200">Chlorine is resistant 30 plus pathogens like e-coli, hepatitis A, Salmonella bifolioa bacteria etc.</td>
                  <td className="p-6 border-b border-slate-200 bg-brand-emerald/5 font-medium">There is no resistant to any types of pathogens and bacteria.</td>
                </tr>
                <tr>
                  <td className="p-6 border-b border-r border-slate-200">Chlorine is ineffective against complex organism such as cysts and protozoa.</td>
                  <td className="p-6 border-b border-slate-200 bg-brand-emerald/5 font-medium">Boom-Ox is extremely effective against complex organism such as cysts and protozoa. Highly effective in organic matter.</td>
                </tr>
                <tr>
                  <td className="p-6 border-b border-r border-slate-200">Chlorine not works in broader pH range.</td>
                  <td className="p-6 border-b border-slate-200 bg-brand-emerald/5 font-medium">Boom-Ox works in broader pH range 4-10.</td>
                </tr>
                <tr>
                  <td className="p-6 border-b border-r border-slate-200">Not removed the biofilm.</td>
                  <td className="p-6 border-b border-slate-200 bg-brand-emerald/5 font-medium">Boom-Ox removes biofilm more faster than others solution & avoid reoccurrence.</td>
                </tr>
                <tr>
                  <td className="p-6 border-b border-r border-slate-200">Chlorine is already banned in certain parts of Europe and USA due to its hazards characteristics. India has also restricted the use of Chlorine since 2010...</td>
                  <td className="p-6 border-b border-slate-200 bg-brand-emerald/5 font-medium">World wide approved product. Removes bad odour of water. Lower oxidation potential and does not hydrolyse to form an acid (less corrosive).</td>
                </tr>
                <tr>
                  <td className="p-6 border-b border-r border-slate-200">Chlorine has a tendency of reacting with organics in water to form harmful byproducts which are often carciogenic. (THMs and HAAs)</td>
                  <td className="p-6 border-b border-slate-200 bg-brand-emerald/5 font-medium">Boom-Ox has not this type of tendency which is 100% safe for human and livestock health.</td>
                </tr>
                <tr>
                  <td className="p-6 border-b border-r border-slate-200">Chlorine cannot be used at temperature &gt;40°C as it tends to disassociate evolving Cl2 gas.</td>
                  <td className="p-6 border-b border-slate-200 bg-brand-emerald/5 font-medium">Boom-Ox used at &gt;40°C as it does not disassociated at elevated temperature.</td>
                </tr>
                <tr>
                  <td className="p-6 border-r border-slate-200">Chlorine has narrow spectrum property.</td>
                  <td className="p-6 border-slate-200 bg-brand-emerald/5 font-medium">Most wide spectrum disinfectant. Covers entire biological treatment and oxidizes Iron, Mangenese and Magnesium.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Product Packing & Guidelines */}
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-brand-navy mb-8">Product Packing</h3>
            
            <div className="mb-8">
              <h4 className="text-lg font-bold text-brand-magenta mb-4">Boom-Ox (ClO2) - 0.75%</h4>
              <div className="space-y-3 text-sm text-slate-700">
                <p><strong className="text-slate-900">Stock Solution Method:</strong> Single Can of 2375 ml (Part A) + Small attached can of 125 ml (Part B), Mix Part A & Part B and keep this stock solution air tight bottle for 1 hr, then ready to use.</p>
                <p><strong className="text-slate-900">Dose:</strong> 50-200 ml/1000 Litre water (Dose depends on source water ORP)</p>
                <p><strong className="text-slate-900">Pack:</strong> 2375ml (Part A) + 125ml (Part B) = 2500 ml (Part A + Part B = 2.5 litre single can)</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-brand-magenta mb-4">Boom-Ox (ClO2) - 7.5%</h4>
              <div className="space-y-3 text-sm text-slate-700">
                <p><strong className="text-slate-900">Stock Solution Method:</strong> 50ml part A + 50 ml part B mix into 900 ml potable water. After mixing keep for 1 hr. in air tight bottle and use this ready stock solution for dosing.</p>
                <p><strong className="text-slate-900">Dose:</strong> Dosage depends on source water ORP and water hold duration in shed. Approx Dose : 50-200 ml / 1000 Litre water</p>
                <p><strong className="text-slate-900">Pack:</strong> 5 Ltr & 25 Ltr</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#05081c] rounded-3xl p-8 shadow-xl text-white"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Info className="text-brand-emerald" />
              General Guidelines
            </h3>
            <ol className="list-decimal list-inside space-y-4 text-slate-300 leading-relaxed text-sm">
              <li>Always keep air tight stock solution and product bottle.</li>
              <li>Stock solution and Product pack keep in dry and dry places for Part A and Part B.</li>
              <li>Do not keep product and stock solution near electric, magnetic field, direct sunlight and hot condition (Part A + Part B together).</li>
              <li>Once Boom-Ox added in water tank, keep tank closed air tight and cool, in shed to avoid direct sun light.</li>
              <li>Add calculated dose of Boom-Ox once tank is full. Do not add Boom-Ox dose before filling water tank.</li>
              <li>For any enquiry and feedback please contact to our company expert.</li>
            </ol>
            
            <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 mb-2">Marketed by:</p>
              <h4 className="text-xl font-bold text-white mb-2">Yaashvan Veterinary Services</h4>
              <p className="text-sm text-slate-300">Sun Exotica, Yewalewadi, Kondhawa Bopdev Road,<br/>Pune-411048</p>
              <p className="text-sm text-slate-300 mt-2"><strong>Mob:</strong> 9172236116 / 9422036116</p>
              <p className="text-sm text-slate-300"><strong>Email:</strong> yaashvetservices@gmail.com</p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default ProductsPage;
