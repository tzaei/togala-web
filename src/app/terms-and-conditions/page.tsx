import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Project Master Terms and Conditions for Togala Contractor Builder.",
};

const PDF_HREF = "/_files/ugd/3c851e_a3c375afe8dd4900ad92f39fe27f48d4.pdf";

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="project master terms and conditions"
      headline="UPDATED AUGUST 8, 2022"
    >
      <section className="bg-bone">
        <div className="mx-auto max-w-[820px] px-6 py-12 lg:py-16">
          <a
            href={PDF_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-12 inline-flex items-center gap-3 rounded-full bg-clay px-7 py-3.5 text-sm font-bold tracking-[0.14em] text-white transition-colors duration-(--duration-swift) hover:bg-clay-600"
          >
            <svg viewBox="0 0 20 20" className="size-5" fill="currentColor" aria-hidden>
              <path d="M10 3a1 1 0 0 1 1 1v7.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L9 11.586V4a1 1 0 0 1 1-1Z" />
              <path d="M4 14a1 1 0 0 1 1 1v1h10v-1a1 1 0 1 1 2 0v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a1 1 0 0 1 1-1Z" />
            </svg>
            DOWNLOAD PDF
          </a>

          <div className="prose-terms text-[0.92rem] leading-[1.8] text-ink/85">
            <p>
              These terms and conditions (this &ldquo;Agreement&rdquo; or these &ldquo;Terms and
              Conditions&rdquo;), are agreed upon between Owner and Contractor, as of the Effective
              Date, as described on the associated Contract Sheet.
            </p>

            <p className="mt-4 text-[0.82rem] font-bold leading-[1.7] tracking-wide">
              THIS AGREEMENT GOVERNS OWNER&rsquo;S USE OF CONTRACTOR&rsquo;S SERVICES. CAPITALIZED
              TERMS HAVE THE DEFINITIONS SET FORTH HEREIN. IF NOT FOUND HEREIN, CAPITALIZED TERMS
              HAVE THE DEFINITIONS SET FORTH IN THE ASSOCIATED CONTRACT SHEET.
            </p>

            <p className="mt-4 text-[0.82rem] font-bold leading-[1.7] tracking-wide">
              BY ACCEPTING THIS AGREEMENT, BY (1) CLICKING A BOX INDICATING ACCEPTANCE, (2)
              EXECUTING AN CONTRACT SHEET THAT REFERENCES THIS AGREEMENT, OR (3) USING ANY FREE
              SERVICES, OWNER AGREES TO THE TERMS OF THIS AGREEMENT. IF THE INDIVIDUAL ACCEPTING
              THIS AGREEMENT IS ACCEPTING ON BEHALF OF A COMPANY OR OTHER LEGAL ENTITY, SUCH
              INDIVIDUAL REPRESENTS THAT THEY HAVE THE AUTHORITY TO BIND SUCH ENTITY AND ITS
              AFFILIATES TO THESE TERMS AND CONDITIONS, IN WHICH CASE THE TERM &ldquo;OWNER&rdquo;
              SHALL REFER TO SUCH ENTITY AND ITS AFFILIATES. IF THE INDIVIDUAL ACCEPTING THIS
              AGREEMENT DOES NOT HAVE SUCH AUTHORITY, OR DOES NOT AGREE WITH THESE TERMS AND
              CONDITIONS, SUCH INDIVIDUAL MUST NOT ACCEPT THIS AGREEMENT AND MAY NOT MAKE THE
              APPOINTMENT.
            </p>

            <SectionTitle>Appointment</SectionTitle>

            <Clause n={1}>
              Appointment. Owner is the owner of certain real property requiring improvements more
              particularly described on the associated Contract Sheet (the &ldquo;Project&rdquo;).
              Owner hereby appoints Contractor, as an independent contractor, as the sole and
              exclusive contractor for the Project, and Contractor hereby accepts the appointment, in
              each case upon the terms and subject to the conditions set forth below.
            </Clause>

            <SectionTitle>Contract Documents</SectionTitle>

            <Clause n={2}>
              The following documents make up the &ldquo;Contract Documents&rdquo;:
              <br />(a) This Agreement between Owner and Contractor, including any exhibits hereto.
              <br />(b) Any applicable Contract Sheet and any Exhibits or supplementals thereto
            </Clause>

            <Clause n={3}>
              Contractor shall perform the work described in the Contract Sheet (the
              &ldquo;Work&rdquo;).
            </Clause>

            <SectionTitle>Payment</SectionTitle>

            <Clause n={4}>
              The Owner agrees to pay Contractor the Contract Sum identified in the Contract Sheet,
              as the same is subject to adjustment as provided for herein.
            </Clause>

            <Clause n={5}>
              The Owner agrees to pay Contractor as progress is completed on the project according to
              the Charge Schedule in the Contract Sheet.
            </Clause>

            <Clause n={6}>
              Retainage to be withheld, if any, will be identified in the Contract Sheet. Retainage
              shall be released upon final acceptance of work and close out of any permitting still
              outstanding. Contractor shall provide if needed any signed release to authorize final
              payment.
            </Clause>

            <Clause n={7}>
              All payments shall be made direct to contractor, prior to any payments, lien waivers
              shall be provided for any requested work to guarantee all parties have been properly
              reimbursed for work completed.
            </Clause>

            <Clause n={8}>
              Contractor agrees to invoice the Owner and Owner agrees to make payments to the
              Contractor during the progress of the Work. With each invoice, Contractor shall deliver
              lien waivers in the form attached hereto as Exhibit &ldquo;B&rdquo;. With
              Contractor&rsquo;s invoice for final payment, Contractor shall deliver a lien waiver in
              the form attached hereto as Exhibit &ldquo;C&rdquo;.
            </Clause>

            <Clause n={9}>
              Payment shall be due within 20 days after Owner&rsquo;s receipt of an invoice. Interest
              shall accrue on past due invoices at the rate of 1 &frac12; percent per month (18% per
              annum), or the maximum rate allowed by law, whichever is less, from the date that
              payment was first due. Owner agrees to pay Contractor&rsquo;s reasonable attorney&rsquo;s
              fees incurred in any efforts to enforce any provision of this Agreement, including
              efforts to compel payment of past due amounts.
            </Clause>

            <Clause n={10}>
              No payment to Contractor under this Agreement, whether in full or in part, shall be
              deemed to operate as Owner&rsquo;s acceptance of any work or an admission that
              Contractor has complied with any provisions of this Agreement.
            </Clause>

            <SectionTitle>Contract Time</SectionTitle>

            <Clause n={11}>
              The Contractor shall complete the Work within the number working days identified in the
              Contract Sheet, beginning as of the last to occur of the following: (i) the date on
              which Owner provides Contractor with a written notice to proceed, (ii) the site is
              available to begin Work, and (iii) Contractor&rsquo;s receipt of all building and fire
              permits; as the same is subject to adjustment as provided for herein (&ldquo;Contract
              Time&rdquo;).
            </Clause>

            <SectionTitle>Warranty</SectionTitle>

            <Clause n={12}>
              For the duration of the Agreement and for a period of one (1) year after Substantial
              Completion of the Work, the Contractor warrants to the Owner that: (1) materials and
              equipment furnished under the Contract will be new and of good quality unless otherwise
              required or permitted by this Agreement; and (2) the Work will be free from defects not
              inherent in the quality required or permitted.
            </Clause>

            <Clause n={13} caps>
              OTHER THAN THE WARRANTY SET FORTH IN THE PRECEDING SECTION, THE CONTRACTOR EXPRESSLY
              DISCLAIMS ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING WARRANTIES OF MECHANTABILITY AND
              FITNESS FOR A PARTICULAR PURPOSE.
            </Clause>

            <Clause n={14}>
              Without limiting the generality of the foregoing, the Contractor does not warrant the
              Work against damage from moisture, including but not limited to, humidity, cupping,
              buckling, warping, shrinkage, natural events or acts of God, or insect infestation,
              including beetles and termites. The Contractor is not responsible for damage caused by
              the moving of items or actions completed by other parties on behalf of the Owner.
            </Clause>

            <Clause n={15}>
              Owner hereby acknowledges that all requested work shall be considered a repair only, and
              that existing structural issues, mold, asbestos, building defects, and any other
              existing conditions are expressly excluded from this agreement. Any existing conditions
              that the Owner has previously identified shall be made known to Contractor prior to
              commencement of work. Any aforementioned items identified by Contractor in the course of
              work shall be made known by written notice to Owner within three (3) days of discovery.
              Owner shall then determine and respond with their desired course of action to remedy the
              situation and notify contractor within a reasonable time to allow for continued work by
              the Contractor. All items shall be addressed fully at the Owners expense.
            </Clause>

            <Clause n={16}>
              All materials supplied by Contractor shall be new. All Work shall be performed in a good
              and quality workman like manner, free from faults and defects, and in accordance with
              the highest standards of the trade and in accordance with the plans and specifications,
              applicable government building codes and guidelines, and any other laws, ordinances,
              rules, requirements, or regulations applicable to the Work.
            </Clause>

            <SectionTitle>Insurance and Indemnity</SectionTitle>

            <Clause n={17}>
              Contractor shall, in a manner satisfactory to Owner, maintain at its own expense until
              the completion of the Work and final payment therefor, the following insurance:
              <br /><br />
              a) Worker&rsquo;s Compensation and Employer&rsquo;s Liability:
              <br />&nbsp;&nbsp;&nbsp;1) Meeting the statutory requirements and covering any employees of Owner used by the Contractor.
              <br />&nbsp;&nbsp;&nbsp;2) Coverage &ldquo;B&rdquo; &ndash; Employer&rsquo;s Liability &ndash; Limit $100,000.
              <br /><br />
              b) Comprehensive General Liability:
              <br />&nbsp;&nbsp;&nbsp;1) Comprehensive General Liability Form.
              <br />&nbsp;&nbsp;&nbsp;2) Contractual Liability; Blanket basis insuring the liability assumed under this Agreement (exclusions O, P, Q and R deleted.)
              <br />&nbsp;&nbsp;&nbsp;3) Limits of Liability; Bodily Injury &ndash; $500,000 each occurrence, $500,000 aggregate; Property Damage &ndash; $100,000 each occurrence aggregate.
              <br /><br />
              c) Comprehensive Automobile Liability:
              <br />&nbsp;&nbsp;&nbsp;1) Comprehensive Automobile Liability Form, including all owned, non-owned and hired vehicles.
              <br />&nbsp;&nbsp;&nbsp;2) Limits of Liability: Bodily Injury &ndash; $250,000 each person; $500,000 each occurrence; Property Damage &ndash; $100,000 each occurrence aggregate.
            </Clause>

            <Clause n={18}>
              Maintenance of the required insurance protection does not relieve the Contractor of
              responsibility for any losses not covered by the above required policies. Failure of
              Contractor to fulfill any of its obligations contained in this Section shall constitute
              a material breach of this Agreement.
            </Clause>

            <Clause n={19}>
              Owner shall purchase and maintain, from an insurance company or insurance companies
              lawfully authorized to issue insurance in the jurisdiction where the Project is located,
              property insurance written on a builder&rsquo;s risk &ldquo;all-risks&rdquo; completed
              value or equivalent policy form and sufficient to cover the total value of the entire
              Project on a replacement cost basis. The Owner&rsquo;s property insurance coverage shall
              be no less than the amount of the initial Contract Sum, plus the value of subsequent
              Modifications and labor performed or materials or equipment supplied by others. The
              property insurance shall be maintained until final completion of the Project. This
              insurance shall include the interests of the Owner, Contractor, Subcontractors, and
              Sub-subcontractors in the Project as insureds. This insurance shall include the
              interests of mortgagees as loss payees.
            </Clause>

            <Clause n={20}>
              Provided that Owner has satisfied its payment obligations hereunder, the Contractor
              shall indemnify and hold the Owner harmless from and against claims, damages, losses and
              expenses, arising out of or resulting from performance of the Work, provided that such
              claim, damage, loss, or expense is attributable to bodily injury, sickness, disease or
              death, or to injury to or destruction of tangible property (other than the Work itself),
              but only to the extent caused by the negligent acts or omissions of the Contractor,
              regardless of whether or not such claim, damage, loss, or expense is caused in part by a
              party indemnified hereunder.
            </Clause>

            <SectionTitle>Change Orders</SectionTitle>

            <Clause n={21}>
              Following commencement of the Work, Owner may, by change order, make changes in the
              Work consisting of additions, deletions or revisions and the same shall result in an
              equitable adjustment in the Contract Sum and Contract Time based upon Contractor&rsquo;s
              actual additional costs and time necessary to implement such change.
            </Clause>

            <Clause n={22}>
              The Contractor shall not be obligated to perform the Work until the change order has
              been signed by both parties. Any delays caused by changes requested by the Owner or
              failure of Owner to agree to a price for such change shall extend the completion date
              hereunder and shall entitle Contractor to a day for day increase in its general
              conditions costs, and those of its Subcontractors.
            </Clause>

            <SectionTitle>Termination of Agreement</SectionTitle>

            <Clause n={23}>
              If the Owner fails to make payment when due, breaches any other obligation of this
              Contract, or if a structural defect or other condition not within the control of the
              Contractor is discovered which affects the Contractor&rsquo;s ability to progress the
              Work, the Contractor may, at its option, terminate the Contract and recover from the
              Owner payment for Work executed and for proven loss with respect to materials, equipment,
              tools, construction equipment and machinery, including reasonable overhead and profit on
              Work not performed, along with other applicable damages.
            </Clause>

            <Clause n={24}>
              If Contractor materially breaches its obligations under this Contract to perform its
              Work, Owner shall have the right to terminate the Contract, but only after delivering a
              written notice of default via Registered Mail to Contractor at the address shown on the
              first page of this Contract. The notice of default shall set forth Contractor&rsquo;s
              breach(es) of the Contract and grant Contractor a period of seven (7) days to commence
              and continue curing the breach(es) before any termination of the Contract is effective.
            </Clause>

            <SectionTitle>Arbitration</SectionTitle>

            <Clause n={25}>
              Any controversy or claim arising out of or related to this Agreement, or the breach
              thereof, shall be resolved by arbitration in accordance with the Construction Industry
              Arbitration Rules of the American Arbitration Association. To the extent permissible by
              law, such arbitration proceeds shall be held in Denver County, Colorado; otherwise such
              arbitration proceedings will be held in the county in which the Project is located. An
              arbitration pursuant to this Agreement may be consolidated with, and Owner and Contractor
              hereby consent to being added (by jointer or otherwise) as a party to, any other
              arbitration or dispute resolution proceeding involving common issues of law or fact, or
              which relates to the Project and in which the Contractor&rsquo;s or Owner&rsquo;s and
              Owner&rsquo;s separate contractors and consultants&rsquo; services are at issue. The
              foregoing agreement to arbitrate and other agreements to arbitrate with an additional
              person or entity, and Owner&rsquo;s and Contractor&rsquo;s consent to joinder, shall be
              specifically enforceable in accordance with applicable law in any court having
              jurisdiction thereof.
            </Clause>

            <SectionTitle>Hazardous Materials</SectionTitle>

            <Clause n={26}>
              If reasonable precautions will be inadequate to prevent foreseeable bodily injury or
              death to persons resulting from a material or substance, including but not limited to
              asbestos, lead, or polychlorinated biphenyl (PCB), encountered on the site by the
              Contractor, the Contractor shall, upon recognizing the condition, immediately stop Work
              in the affected area and report the condition to the Owner. The Owner shall be
              responsible to conduct an assessment study to determine the presence of a hazardous
              material, coordinate the necessary abatement, and contract with the applicable parties
              for abatement. When the material or substance has been rendered harmless, Work in the
              affected area shall resume upon written agreement of the Owner and Contractor. The
              contract time shall be extended appropriately and the contract sum shall be increased in
              the amount of the Contractor&rsquo;s additional costs of shutdown, delay and start-up.
            </Clause>

            <SectionTitle>General Terms</SectionTitle>

            <Clause n={27}>
              Contractor shall submit for the Owner&rsquo;s information a construction schedule for
              the Work. Contractor shall revise this schedule to reflect the actual progress of the
              Work at appropriate intervals throughout the Project.
            </Clause>

            <Clause n={28}>
              Contractor shall be permitted to subcontract any portions of the Work to those
              contractors and suppliers (collectively &ldquo;Subcontractors&rdquo;) that Contractor
              deems appropriate. At Owner&rsquo;s request, Contractor shall furnish the name of such
              Subcontractors, for Owner&rsquo;s information only. Communication between Owner and any
              Subcontractors shall be through Contractor.
            </Clause>

            <Clause n={29}>
              The Contractor shall have complete control over the construction means, methods,
              techniques, sequences and procedures, and for coordinating the Work. The Owner
              acknowledges and agrees that, if the Work is part of a larger project, it is the
              Owner&rsquo;s responsibility to coordinate the Work so that (1) the Contractor will have
              unfettered access to the Project to perform its Work; (2) the Contractor&rsquo;s Work
              will not be interfered with by others; and (3) the Contractor&rsquo;s Work will not be
              damaged. The Owner agrees to be responsible for such damage to the Contractor&rsquo;s
              Work and to pay any damages resulting from any delays to the Contractor&rsquo;s Work.
            </Clause>

            <Clause n={30}>
              Owner shall promptly furnish all information and services necessary for Contractor to
              carry out the Work. If Owner fails to furnish such information and services in a timely
              manner, Contractor shall be entitled to an equitable adjustment in the Contract Sum and
              Contract Time for such delay.
            </Clause>

            <Clause n={31}>
              Prior to commencement of the Work and thereafter upon any change to the Contract Sum,
              Owner at the written request by the Contractor, shall furnish to the Contractor
              reasonable evidence that the Owner has made financial arrangements to fulfill the
              Owner&rsquo;s obligations under the Agreement. The Contractor shall have no obligation to
              commence or continue the Work until the Owner provides such evidence. If commencement or
              progress of the Work is delayed under this Section the Contract Sum and Contract Time
              shall be equitably adjusted.
            </Clause>

            <SectionTitle>Claims</SectionTitle>

            <Clause n={32}>
              If concealed or unknown physical conditions are encountered at the site that differ from
              those indicated in the Contract Documents or from those conditions ordinarily found to
              exist, the Contract Sum and Contract Time shall be equitably adjusted as mutually agreed
              between the Owner and Contractor.
            </Clause>

            <Clause n={33}>
              If the Contractor is delayed at any time in the commencement or progress of the Work by
              changes ordered in the Work, labor disputes, fire, unusual delay in deliveries, adverse
              weather conditions, unavoidable casualties, or by any other causes beyond the
              Contractor&rsquo;s control; then the Contract Time and Contract Sum shall be equitably
              adjusted.
            </Clause>

            <Clause n={34}>
              The Contractor shall not be liable for delays in the Work resulting from a cause beyond
              the Contractor&rsquo;s control.
            </Clause>

            <Clause n={35}>
              The Contractor shall not be liable for any incidental, consequential or punitive damages
              associated with or in any way related to the Work, the Project or this Agreement.
            </Clause>

            <Clause n={36}>
              Pending final resolution of a claim, except as otherwise agreed in writing, the
              Contractor shall proceed with performance of portion of the Work not in dispute and the
              Owner shall continue to make payments in accordance with the Contract Documents.
            </Clause>

            <SectionTitle>Miscellaneous</SectionTitle>

            <Clause n={37}>
              This Agreement, and all of its included documents, represents the entire and integrated
              agreement between the parties and supersedes prior negotiations, representations or
              agreements, either written or oral.
            </Clause>

            <Clause n={38}>
              To the extent permissible by law, this Agreement shall be governed by the laws of the
              State of Colorado; otherwise this Agreement shall be governed by the laws of the place
              where the Project is located.
            </Clause>

            <Clause n={39}>
              Neither party to the Agreement shall assign the Agreement without written consent of the
              other, which shall not be unreasonably withheld.
            </Clause>

            <Clause n={40}>
              Wherever possible, each provision of this Agreement shall be interpreted in such manner
              as to be effective and valid under applicable law, but if any provision of this
              Agreement shall be prohibited by or invalid under applicable law, such provision shall
              be ineffective to the extent of such prohibition or invalidity, without invalidating the
              remainder of such provisions or the remaining provisions of this Agreement.
            </Clause>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 mb-4 text-[1.05rem] font-bold italic text-ink">
      {children}
    </h2>
  );
}

function Clause({
  n,
  caps,
  children,
}: {
  n: number;
  caps?: boolean;
  children: React.ReactNode;
}) {
  return (
    <p className={`mt-4 pl-8 -indent-8 ${caps ? "text-[0.82rem] font-bold leading-[1.7] tracking-wide" : ""}`}>
      <span className="font-bold">{n})</span> {children}
    </p>
  );
}
