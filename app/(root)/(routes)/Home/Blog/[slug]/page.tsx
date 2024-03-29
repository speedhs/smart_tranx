"use client"
import React, { useRef, useState } from 'react';
console.log("guge")
// Define a type for the content sections
type ContentSection = {
  id: string;
  title: string;
  content: string;
};
  
interface SectionContent {
    [subSectionTitle: string]: string | { [subSubSectionTitle: string]: string };
  }
  
interface BlogMap {
    [title: string]: SectionContent;
  }

// Define the content sections
const blog_map = {
    "Navigating-Agile-Landscape": {
        "Introduction": "In today's fast-paced business world, Agile methodologies have become a cornerstone for successful project management. Emphasizing flexibility, customer satisfaction, and continuous improvement, Agile approaches are reshaping how projects are managed and executed. For professionals in this domain, earning a PMI-ACP (Project Management Institute - Agile Certified Practitioner) certification is a significant step in mastering Agile principles and techniques. This blog post aims to guide you through the essential skills needed for PMI-ACP success and how to effectively prepare for this coveted certification.",
        "Section 1: Understanding Agile Principles": "Agile methodologies break from traditional project management techniques, focusing instead on iterative development, where requirements and solutions evolve through collaborative effort. Core principles include prioritizing customer satisfaction through early and continuous delivery, welcoming changing requirements, and delivering working products frequently. Agile also emphasizes simplicity, self-organizing teams, and regular reflections on how to become more effective.",
        "Section 2: The PMI-ACP Certification – An Overview": "The PMI-ACP recognizes knowledge of Agile principles, practices, and tools across Agile methodologies. It's not limited to Scrum masters or Agile coaches but is relevant for any professional working on Agile teams or in Agile environments. To be eligible, one needs a combination of general project experience, Agile project experience, and Agile education. The exam covers numerous domains like Agile principles and mindset, value-driven delivery, stakeholder engagement, team performance, adaptive planning, problem detection and resolution, and continuous improvement.",
        "Section 3: Essential Skills for PMI-ACP Success": "Adaptability: Agile environments are dynamic, requiring the ability to cope with rapid change. Effective Communication: Agile relies heavily on clear, concise, and continuous communication both within the team and with stakeholders. Collaboration and Teamwork: Agile methodologies emphasize collective responsibility and teamwork. Continuous Improvement Mindset: The essence of Agile is to learn from each cycle and enhance the process and product incrementally. Technical Proficiency: Familiarity with common Agile methodologies and tools (like JIRA, Trello, etc.) is crucial. Problem-Solving: Agile teams often encounter unforeseen challenges, necessitating innovative and quick problem-solving abilities.",
        "Section 4: Practical Tips to Prepare for the PMI-ACP Exam": "Preparing for the PMI-ACP exam requires a blend of theoretical understanding and practical experience. Start with the official PMI-ACP exam content outline and study materials. Participating in study groups or forums can provide valuable insights and foster a deeper understanding of Agile practices. Hands-on experience is invaluable, so try to involve yourself in real-world Agile projects. Practice exams are also critical to familiarize yourself with the exam format and timing.",
        "Section 5: The Future of Agile and PMI-ACP": "Agile methodologies are constantly evolving and are being adopted in various sectors beyond IT and software development. The PMI-ACP credential will likely continue to grow in relevance as Agile principles are increasingly integrated into mainstream project management practices."
    },
    "PMI-ACP vs. Traditional Project Management: Understanding the Agile Difference": {
        "Introduction": "The landscape of project management is continually evolving, with two distinct approaches at the forefront: Agile, represented by certifications such as the PMI-ACP (Project Management Institute - Agile Certified Practitioner), and Traditional Project Management. This blog post delves into the nuances of these methodologies, providing clarity for professionals navigating the complex world of project management.",
        "Section 1: What is Traditional Project Management?": "Traditional Project Management, often synonymous with the Waterfall model, is a linear and sequential approach. This methodology is characterized by its structured stages: initiation, planning, execution, monitoring, and closing. Each phase has specific deliverables and a distinct review process. The strength of this method lies in its order and predictability, making it ideal for projects with well-defined requirements and minimal changes expected during the project lifecycle.",
        "Section 2: Agile Project Management and the PMI-ACP": "In contrast, Agile Project Management thrives on flexibility and iterative progress. It's a holistic approach that adapts to changing project requirements, ensuring the final deliverable meets the evolving needs of the customer. The PMI-ACP certification encompasses various Agile methodologies, such as Scrum, Kanban, and Lean. It validates a professional’s ability to understand and apply Agile principles effectively in real-world scenarios. Agile focuses on collaborative teamwork, customer feedback, and short, iterative cycles of development.",
        "Section 3: Key Differences Between Agile and Traditional Project Management": "Flexibility vs. Rigidity: Agile is adaptable to change, while Traditional Project Management adheres to a predetermined scope. Progress Measurement: Agile tracks progress through functional deliverables, whereas Traditional Project Management uses predefined milestones and phases. Role of the Team: Agile encourages a decentralized, self-organizing team, contrasting the hierarchical team structure in traditional methods. Customer Involvement: Agile involves continuous customer feedback, while traditional methods may limit customer involvement to specific milestones.",
        "Section 4: Choosing the Right Approach for Your Project": "The choice between Agile and Traditional Project Management should be influenced by the project's nature and the organization's environment. Traditional methods are often more suitable for projects with stable requirements, such as construction or manufacturing. Conversely, Agile is ideal for projects in dynamic sectors like software development, where customer needs and technology evolve rapidly. The organizational culture and readiness to embrace change also play a crucial role in this decision.",
        "Section 5: The Future of Project Management: Blending Approaches": "A growing trend in project management is the integration of Agile and Traditional methods, creating a 'hybrid' approach. This method leverages the strengths of both methodologies to suit different phases of a project. For instance, the initial planning phase may follow a traditional approach, while the development phase adopts Agile. This flexibility is increasingly seen as crucial in modern project management."
    },
    "ITIL 4 in the Modern IT Landscape: Principles for Digital Transformation": {
        "Introduction": "In an era where digital transformation is not just a trend but a necessity, ITIL 4 emerges as a pivotal framework for IT service management. This iteration of ITIL (Information Technology Infrastructure Library) aligns traditional IT practices with the dynamic needs of modern digital businesses. This blog post explores the core principles of ITIL 4 and how they are shaping digital transformation in various industries.",
        "Section 1: Overview of ITIL 4": "ITIL 4, the latest version of the ITIL framework, is designed to provide comprehensive guidance on managing and operating information technology in the digital era. Unlike its predecessors, ITIL 4 extends beyond IT service management and integrates concepts from other methodologies like Lean, Agile, and DevOps. This holistic approach is vital in today's fast-paced, interconnected digital landscape.",
        "Section 2: Core Principles of ITIL 4": {
            "Focus on Value": "Emphasizes understanding and delivering value to customers and stakeholders.",
            "Start Where You Are": "Encourages using existing services, processes, and tools as a foundation for improvement.",
            "Progress Iteratively with Feedback": "Adopting an incremental approach to service development and improvement, guided by customer and stakeholder feedback.",
            "Collaborate and Promote Visibility": "Stresses the importance of collaboration and open communication within and across teams.",
            "Think and Work Holistically": "Recognizes the interconnected nature of IT service management and the need for an integrated approach.",
            "Keep it Simple and Practical": "Advocates for simplicity in processes and procedures to increase efficiency."
        },
        "Section 3: ITIL 4 in Digital Transformation": "Digital transformation involves integrating digital technology into all areas of a business, fundamentally changing how operations are conducted and value is delivered. ITIL 4 provides a structured framework to manage this change effectively. This section can include case studies or examples demonstrating how organizations have used ITIL 4 to facilitate their digital transformation journey.",
        "Section 4: Adapting ITIL 4 in Various Industries": {
            "Banking and Finance": "Implementing ITIL 4 to enhance digital banking services and customer experiences.",
            "Healthcare": "Using ITIL 4 principles to streamline healthcare IT services, leading to improved patient care and data management.",
            "Retail": "Adapting ITIL 4 for e-commerce platforms to optimize customer service and supply chain management."
        },
        "Section 5: Challenges and Solutions in Implementing ITIL 4": "Discuss common challenges organizations face when adopting ITIL 4, such as resistance to change, the complexity of integrating with existing processes, and training needs. Offer practical solutions and best practices for successful implementation.",
        "Conclusion": "ITIL 4 is more than just a framework for IT service management; it's a strategic guide for digital transformation. By aligning IT operations with broader business goals and adopting a holistic, agile approach, ITIL 4 helps organizations navigate the complexities of the modern digital landscape effectively."
    },
    "Bridging the Gap Between IT Services and Business Goals with ITIL 4": {
        "Introduction": "In the rapidly evolving business landscape, aligning IT services with overarching business objectives is crucial for organizational success. ITIL 4, the latest iteration of the IT Infrastructure Library, emerges as a key framework in harmonizing IT operations with business goals. This blog post delves into how ITIL 4 bridges this critical gap, ensuring IT services effectively support and drive business strategy.",
        "Section 1: Understanding ITIL 4": "ITIL 4 is a comprehensive framework for IT service management (ITSM) that integrates traditional IT practices with modern methodologies like Agile, Lean, and DevOps. It focuses not only on IT operations but also on aligning these services with the needs and goals of the business. This section introduces ITIL 4 and its relevance in the current business context.",
        "Section 2: ITIL 4's Core Components and Business Alignment": {
            "Service Value System (SVS)": "Explores ITIL’s SVS, which provides a holistic approach to creating, delivering, and continually improving IT services.",
            "Guiding Principles": "Discusses principles such as 'focus on value', 'start where you are', and 'think and work holistically', which are instrumental in aligning IT services with business objectives.",
            "Governance": "Highlights the role of governance in ensuring IT and business strategies are closely linked."
        },
        "Section 3: Real-World Applications of ITIL 4": {
            "Case Study in Retail": "How a retail giant used ITIL 4 to enhance its e-commerce platform, improving customer experience and aligning with business growth objectives.",
            "Case Study in Healthcare": "Demonstrates how a healthcare provider implemented ITIL 4 to streamline patient data management, aligning IT services with patient care goals.",
            "Case Study in Finance": "Examines how a financial institution leveraged ITIL 4 to optimize its IT services, supporting business goals of customer satisfaction and operational efficiency."
        },
        "Section 4: Overcoming Challenges in Aligning IT and Business Goals": {
            "Communication Barriers": "Discusses strategies to improve communication and collaboration between IT and business units.",
            "Cultural Change": "Addresses the need for a cultural shift towards shared objectives and collaborative working environments.",
            "Continuous Improvement": "Emphasizes the"
        }
    },

    "Mastering Change Management: Strategies for Organizational Success": {
        "Introduction": "Change is a constant in the business world, but managing it effectively is a challenge that many organizations face. Mastering change management is crucial for businesses to adapt, grow, and remain competitive. This blog post explores effective strategies for implementing successful change management, ensuring organizations can navigate the turbulent waters of change with confidence and agility.",
        "Section 1: Understanding Change Management": {
            "Definition and Importance": "Define change management and its significance in the contemporary business environment.",
            "Common Challenges": "Discuss common challenges organizations face during change, such as resistance from employees, lack of effective communication, and inadequate planning."
        },
        "Section 2: Key Principles of Effective Change Management": {
            "Leadership and Vision": "Emphasize the role of strong leadership in guiding change, including setting a clear vision and direction.",
            "Stakeholder Engagement": "Highlight the importance of involving all stakeholders, understanding their concerns, and fostering a sense of ownership in the change process.",
            "Clear Communication": "Discuss strategies for transparent and continuous communication throughout the change process."
        },
        "Section 3: Strategic Planning for Change": {
            "Developing a Change Management Plan": "Guide on creating a comprehensive plan, including defining objectives, timelines, and resource allocation.",
            "Risk Assessment and Contingency Planning": "Discuss the importance of identifying potential risks and having contingency plans in place."
        },
        "Section 4: Implementing Change Successfully": {
            "Phased Implementation": "Explore the benefits of implementing change in phases, allowing for adjustments and improvements along the way.",
            "Training and Support": "Address the need for training and support systems to help employees adapt to new processes or systems."
        },
        "Section 5: Monitoring and Evaluating Change": {
            "Feedback Mechanisms": "Discuss setting up systems for feedback collection and analysis.",
            "Measuring Success": "Share methods for assessing the impact of change initiatives, including key performance indicators and benchmarks."
        },
        "Section 6: Organizational Culture and Change": {
            "Fostering a Culture of Adaptability": "Offer insights on building a company culture that embraces change and encourages innovation.",
            "Dealing with Resistance": "Provide strategies for managing resistance to change, including empathetic leadership and addressing the concerns of employees."
        },
        "Section 7: Learning from Case Studies": {
            "Successful Change Management Examples": "Present case studies from organizations that have successfully navigated significant changes.",
            "Lessons Learned": "Extract key takeaways and lessons from these examples."
        },
        "Conclusion": "Mastering change management is an essential skill for any organization aiming to thrive in today’s fast-paced business world. By employing effective strategies, engaging stakeholders, and fostering a culture that embraces change, organizations can ensure that transitions are smooth, goals are met, and the company can emerge stronger and more resilient."
    },
    "Change Management in Action: Case Studies of Transformational Change": {
        "Introduction": "Change management is a critical aspect of modern business strategy, but its real-world application can be as challenging as it is transformative. This blog post delves into several case studies of transformational change, examining how different organizations have successfully navigated the complexities of change management. These stories provide valuable insights and practical lessons for any business embarking on a journey of transformation.",
        "Section 1: The Essence of Change Management": {
            "Understanding Change Management": "Briefly define change management and its importance in today's fast-paced business environment.",
            "Core Elements of Effective Change Management": "Outline the key components that contribute to successful change initiatives, such as leadership, communication, and stakeholder engagement."
        },
        "Section 2: Case Study 1 – Tech Industry Transformation": {
            "Company Background": "Introduce a tech company (a hypothetical or anonymized real-world example) facing market challenges or technological disruption.",
            "Change Initiative": "Describe the change implemented, such as digital transformation, restructuring, or adopting new business models.",
            "Strategies Employed": "Detail the change management strategies used, including leadership involvement, employee engagement, and training programs.",
            "Outcomes and Lessons Learned": "Analyze the results of the change initiative and the key takeaways from this case study."
        },
        "Section 3: Case Study 2 – Retail Sector Rebranding": {
            "Company Background": "Present a retail company needing a significant rebranding to stay competitive.",
            "Change Initiative": "Explain the rebranding strategy, including changes in branding, customer engagement, and store design.",
            "Change Management Approach": "Discuss how the change was managed, focusing on communication strategies, customer feedback integration, and employee adaptation.",
            "Outcomes and Reflections": "Evaluate the impact of the rebranding and the lessons learned about change management in the retail sector."
        },
        "Section 4: Case Study 3 – Non-Profit Organizational Restructuring": {
            "Organization Background": "Describe a non-profit organization that required restructuring to improve efficiency and impact.",
            "Change Initiative": "Outline the restructuring process, including new operational models or strategic partnerships.",
            "Implementation of Change": "Highlight the change management techniques used, such as stakeholder consultations, transparent communication, and phased implementation.",
            "Results and Insights": "Discuss the outcomes of the restructuring and insights gained about change management in the non-profit sector."
        },
        "Section 5: Synthesizing Insights from Case Studies": {
            "Common Themes": "Draw out common themes and successful strategies from the case studies.",
            "Diverse Approaches": "Emphasize the need for tailored change management strategies depending on organizational context and goals.",
            "Adapting Lessons for Your Organization": "Suggest how readers can apply these insights and lessons to their own organizational change initiatives."
        },
        "Conclusion": "These case studies demonstrate that while the path of transformational change can be complex, with effective change management strategies, organizations can navigate these challenges successfully. By learning from these real-world examples, businesses can equip themselves with the knowledge and tools necessary to manage change effectively and emerge stronger."
    },
"Starting Your Project Management Journey: A Beginner's Guide to CAPM": {
        "Introduction": "Embarking on a career in project management can be both exciting and daunting. One of the first steps for many aspiring project managers is obtaining the Certified Associate in Project Management (CAPM) certification. This entry-level credential, offered by the Project Management Institute (PMI), is designed to give beginners a solid foundation in project management principles. This blog post serves as a comprehensive guide for those beginning their project management journey with the CAPM certification.",
        "Section 1: Understanding the CAPM Certification": {
            "What is CAPM?": "Define the CAPM certification and its place within the world of project management credentials.",
            "The Value of CAPM": "Discuss how the CAPM certification can benefit those starting in project management, including its recognition by employers and its role in building foundational knowledge."
        },
        "Section 2: Eligibility and Application Process for CAPM": {
            "Eligibility Requirements": "Outline the prerequisites for taking the CAPM exam, including education and contact hours of project management education.",
            "Navigating the Application Process": "Provide a step-by-step guide on applying for the CAPM exam, including tips for preparing the application and what to expect during the process."
        },
        "Section 3: Preparing for the CAPM Exam": {
            "Exam Overview": "Describe the structure of the CAPM exam, including the number of questions, the format, and the areas of knowledge it covers.",
            "Study Tips and Resources": "Offer advice on study techniques, recommended resources, study groups, and courses that can aid in exam preparation."
        },
        "Section 4: After the CAPM: Career Pathways in Project Management": {
            "Career Opportunities": "Explore the types of roles and industries where a CAPM certification can open doors for beginners.",
            "Path to PMP": "Discuss how the CAPM certification can be a stepping stone to the more advanced Project Management Professional (PMP) certification and what additional experience and education are required."
        },
        "Section 5: Maintaining and Leveraging Your CAPM Certification": {
            "Certification Maintenance": "Explain the requirements for maintaining and renewing the CAPM certification.",
            "Using CAPM in the Job Market": "Offer strategies for leveraging CAPM certification in job searches, resumes, and interviews."
        },
        "Section 6: Real-World Insights: CAPM Holders' Experiences": {
            "Testimonials and Success Stories": "Share stories and testimonials from CAPM certification holders about how the credential has impacted their career paths.",
            "Lessons Learned": "Highlight key takeaways and insights from these real-world experiences."
        },
        "Conclusion": "The CAPM certification is a significant first step in a project management career, providing foundational knowledge and a recognized credential that can open doors to new opportunities. As the start of a longer journey in project management, CAPM equips beginners with the confidence and skills needed to progress in this dynamic field."
    },
    "CAPM Certification: Laying the Groundwork for a Career in Project Management": {
        "Introduction": "For those aspiring to enter the field of project management, the Certified Associate in Project Management (CAPM) certification is a crucial stepping stone. This credential, offered by the Project Management Institute (PMI), is designed for individuals who wish to gain a solid foundation in project management principles and practices. This blog post delves into the CAPM certification, discussing its importance, the process of obtaining it, and how it can lay the groundwork for a successful career in project management.",
        "Section 1: Overview of the CAPM Certification": {
            "What is CAPM?": "Provide a detailed introduction to the CAPM certification, explaining its role and recognition in the field of project management.",
            "Target Audience": "Describe who can benefit from the CAPM certification, including students, new graduates, and professionals seeking to transition into project management."
        },
        "Section 2: The Benefits of CAPM Certification": {
            "Knowledge and Skills": "Discuss how CAPM equips individuals with fundamental knowledge and skills in project management.",
            "Career Opportunities": "Explore how CAPM can enhance career prospects by qualifying individuals for various entry-level positions in project management.",
            "Credibility and Recognition": "Highlight how CAPM certification can increase credibility and recognition in the professional community."
        },
        "Section 3: CAPM Eligibility and Application Process": {
            "Eligibility Criteria": "Outline the specific eligibility requirements for the CAPM exam, including educational background and contact hours in project management education.",
            "Application Steps": "Provide a comprehensive guide on the application process for the CAPM exam, including registration, fees, and scheduling the exam."
        },
        "Section 4: Preparing for the CAPM Exam": {
            "Exam Content and Format": "Describe the structure of the CAPM exam, including the number of questions, duration, and main content areas.",
            "Study Resources and Strategies": "Recommend study materials, courses, and strategies for effective exam preparation, such as PMI’s resources, online forums, and study groups."
        },
        "Section 5: After CAPM: Next Steps in Your Project Management Career": {
            "Using CAPM in Your Career": "Offer advice on how to leverage CAPM certification for job searches, resume building, and networking.",
            "Path to PMP": "Discuss how the CAPM certification can be a foundation for pursuing the Project Management Professional (PMP) certification, including additional requirements and experience needed."
        },
        "Section 6: Personal Success Stories": {
            "Testimonials": "Share real-life success stories from individuals who have benefitted from obtaining their CAPM certification.",
            "Career Impact": "Highlight the tangible impacts of CAPM certification on their career paths and opportunities."
        },
        "Conclusion": "The CAPM certification is more than just an academic achievement; it's a gateway to the world of project management. For those beginning their journey in this dynamic field, CAPM serves as a solid foundation, providing the necessary knowledge and opening doors to exciting career opportunities."
    },
    "The Comparative Edge: CAPM in Today’s Project Management World": {
        "Introduction": "In the rapidly evolving world of project management, standing out and staying relevant are key to professional growth. The Certified Associate in Project Management (CAPM) certification, offered by the Project Management Institute (PMI), is increasingly recognized as a valuable credential in this competitive field. This blog post explores the comparative edge that CAPM offers in the modern project management landscape, examining its benefits, relevance, and how it stands alongside other certifications.",
        "Section 1: The Growing Importance of Project Management Certifications": {
            "Project Management Trends": "Discuss current trends in project management, including the demand for certified professionals and the expanding scope of project management roles.",
            "Role of Certifications": "Highlight how certifications like CAPM are becoming critical benchmarks for skills and knowledge in the industry."
        },
        "Section 2: CAPM – A Comprehensive Overview": {
            "What is CAPM?": "Provide an in-depth introduction to CAPM, including its objectives, structure, and target audience.",
            "Distinct Features of CAPM": "Discuss the unique aspects of CAPM, such as its focus on foundational knowledge and principles of project management."
        },
        "Section 3: CAPM vs Other Project Management Certifications": {
            "Comparison with PMP": "Contrast CAPM with the Project Management Professional (PMP) certification, focusing on differences in prerequisites, content, and career impact.",
            "Comparison with Other Entry-Level Certifications": "Compare CAPM with other entry-level project management certifications, highlighting its distinct advantages and global recognition."
        },
        "Section 4: The Advantages of Holding a CAPM Certification": {
            "Career Opportunities": "Explore how CAPM can open doors to entry-level project management roles and serve as a stepping stone for more advanced positions.",
            "Skill Enhancement": "Discuss how CAPM helps in developing essential project management skills that are valued across industries.",
            "Global Recognition": "Emphasize the international recognition of CAPM and how it enhances a professional’s credibility worldwide."
        },
        "Section 5: CAPM in Practical Application": {
            "Real-World Relevance": "Share insights on how CAPM principles and knowledge are applied in various industries and project types.",
            "Case Studies": "Include case studies or testimonials from CAPM-certified professionals, illustrating the practical benefits and career advancements they have experienced."
        },
        "Section 6: Preparing for and Maintaining CAPM Certification": {
            "Exam Preparation": "Offer guidance on preparing for the CAPM exam, including study resources, tips, and strategies.",
            "Certification Maintenance": "Explain the process of maintaining and renewing the CAPM certification, highlighting the importance of continuous learning in the field."
        },
        "Conclusion": "CAPM stands as a robust entry point into the world of project management, offering professionals a comparative edge through recognized credentials, foundational knowledge, and skill enhancement. In today’s competitive job market, obtaining the CAPM certification can be a strategic move for aspiring project managers and those seeking to establish their place in this dynamic field."
    },
    "Understanding-Agile-Principles": {
        "Introduction": "Agile methodologies have transformed the world of project management, offering flexible and efficient approaches to handling complex projects. Within this paradigm, the role of a Certified Scrum Master (CSM) is pivotal. This blog post delves into the responsibilities, importance, and impact of a Certified Scrum Master in steering Agile projects towards success. It aims to provide a clear understanding of the CSM's role and why it's critical in today's fast-paced project environments.",
        "Section 1: Understanding Agile and Scrum": {
            "Agile Methodology Overview": "Briefly explain what Agile is and how it differs from traditional project management methodologies.",
            "Introduction to Scrum": "Dive into the Scrum framework as one of the most popular Agile methodologies, outlining its key components and principles."
        },
        "Section 2: The Certified Scrum Master Explained": {
            "Role and Responsibilities": "Define the role of a Scrum Master, detailing the responsibilities such as facilitating meetings (daily standups, sprint planning, retrospectives), removing impediments, and coaching the team in Agile practices.",
            "Difference from Traditional Project Managers": "Highlight how the role of a Scrum Master differs from that of a traditional project manager, emphasizing the servant-leadership aspect."
        },
        "Section 3: The Importance of Scrum Master Certification": {
            "Benefits of Certification": "Discuss the advantages of being a Certified Scrum Master, including recognition of expertise, a deeper understanding of Scrum, and enhanced career opportunities.",
            "Certification Process": "Provide an overview of how one can become a Certified Scrum Master, including prerequisites, training, and the certification exam."
        },
        "Section 4: The Scrum Master in Action": {
            "Facilitating Agile Processes": "Detail how a Scrum Master facilitates various Scrum ceremonies and processes to ensure smooth project execution.",
            "Team Dynamics and Performance": "Explore the role of the Scrum Master in team building, conflict resolution, and fostering a collaborative work environment.",
            "Continuous Improvement": "Discuss how a Scrum Master guides teams toward continuous improvement through regular retrospectives and feedback loops."
        },
        "Section 5: Challenges and Solutions in the Scrum Master Role": {
            "Common Challenges": "Address some typical challenges a Scrum Master may face, such as resistance to change, team dysfunctions, or organizational impediments.",
            "Strategies for Success": "Offer strategies and best practices for Scrum Masters to overcome these challenges effectively."
        },
        "Section 6: Case Studies and Real-World Examples": {
            "Success Stories": "Share case studies or success stories of how effective Scrum Masters have positively impacted Agile projects.",
            "Lessons Learned": "Draw key lessons and insights from these real-world examples."
        },
        "Conclusion": "The role of a Certified Scrum Master is multifaceted and instrumental in the success of Agile projects. With their expertise in Scrum principles and practices, Scrum Masters not only facilitate processes but also nurture team dynamics, drive efficiency, and foster an environment of continuous improvement. Their role is integral to realizing the full potential of Agile methodologies in project management."
    },
    "From Good to Great: Elevating Your Agile Team as a Scrum Master": {
        "Introduction": "In the dynamic realm of Agile project management, the role of a Scrum Master is not just to facilitate and oversee, but to elevate the team from good to great. This blog post focuses on how Scrum Masters can enhance their team's performance, foster a thriving Agile culture, and lead their teams to achieve exceptional results. By adopting specific strategies and mindsets, Scrum Masters can significantly impact the effectiveness and productivity of their Agile teams.",
        "Section 1: The Role of a Scrum Master in Agile Teams": {
            "Defining the Role": "Explore the fundamental responsibilities of a Scrum Master, emphasizing their role as facilitators, coaches, and impediment removers.",
            "Beyond the Basics": "Discuss the Scrum Master's role in setting the stage for high performance, including fostering team dynamics and encouraging continuous improvement."
        },
        "Section 2: Strategies for Team Empowerment and Growth": {
            "Encouraging Self-Organization": "Delve into methods for empowering teams to self-organize, make decisions, and take ownership of their work.",
            "Promoting Agile Principles": "Share how Scrum Masters can reinforce core Agile principles and values within their teams, ensuring they are deeply ingrained in the team's work ethic."
        },
        "Section 3: Enhancing Team Communication and Collaboration": {
            "Effective Communication Techniques": "Offer tips on improving communication within the team, including active listening, clear articulation of ideas, and open feedback channels.",
            "Collaboration Tools and Practices": "Suggest tools and practices that enhance collaboration, such as collaborative planning sessions and pair programming."
        },
        "Section 4: Navigating and Resolving Team Conflicts": {
            "Conflict Resolution": "Provide strategies for identifying, addressing, and resolving conflicts within the team in a constructive manner.",
            "Building a Positive Team Culture": "Discuss how a positive, respectful, and inclusive team culture can prevent conflicts and foster collaboration."
        },
        "Section 5: Focusing on Continuous Improvement": {
            "Implementing Retrospectives": "Detail how to effectively run retrospectives to reflect on processes, identify areas for improvement, and implement actionable changes.",
            "Encouraging a Growth Mindset": "Inspire teams to adopt a growth mindset, focusing on learning from mistakes and viewing challenges as opportunities."
        },
        "Section 6: Success Stories and Real-World Examples": {
            "Case Studies": "Share success stories or case studies where Scrum Masters have successfully transformed their teams.",
            "Lessons Learned": "Extract valuable lessons and practical tips from these examples."
        },
        "Conclusion": "The journey from good to great requires a Scrum Master to be more than just a process facilitator. It's about inspiring and leading teams to new heights of collaboration, innovation, and productivity. By adopting these strategies, Scrum Masters can play a pivotal role in elevating their teams and achieving outstanding results in the Agile landscape."
    },
    "Case Studies: Transformative Success Stories of Certified Scrum Masters": {
        "Introduction": "The role of a Certified Scrum Master (CSM) is vital in guiding Agile teams to success. But what does this success look like in practice? This blog post delves into several case studies showcasing the transformative impact Certified Scrum Masters have had on their teams and projects. Through these real-life examples, we'll explore the challenges, strategies, and outcomes that underscore the pivotal role Scrum Masters play in the Agile world.",
        "Section 1: The Impact of a Certified Scrum Master": {
            "The CSM Role": "Briefly revisit the responsibilities and expectations of a Certified Scrum Master in an Agile team.",
            "The Power of Certification": "Discuss how formal training and certification can enhance a Scrum Master's effectiveness."
        },
        "Section 2: Case Study 1 – Tech Industry Turnaround": {
            "Company Background": "Introduce a technology company struggling with delayed projects and low team morale.",
            "Challenges Faced": "Outline specific issues the company faced, such as poor communication, lack of clear goals, or ineffective processes.",
            "The Scrum Master's Role": "Detail the interventions and strategies employed by the CSM to address these challenges.",
            "Outcomes": "Share the positive changes observed, like improved project delivery times, enhanced team collaboration, and higher product quality."
        },
        "Section 3: Case Study 2 – Financial Services Revamp": {
            "Organization Profile": "Present a financial services firm looking to innovate and improve customer service.",
            "Initial Challenges": "Describe the hurdles, such as resistance to change or rigid traditional practices.",
            "Scrum Master Intervention": "Explain how the CSM facilitated change, including specific Agile practices introduced or cultural shifts encouraged.",
            "Results Achieved": "Highlight outcomes such as increased customer satisfaction, streamlined processes, and successful adoption of Agile methodologies."
        },
        "Section 4: Case Study 3 – Retail Sector Agile Transformation": {
            "Retail Company Overview": "Introduce a retail company aiming to rapidly adapt to the digital marketplace.",
            "Challenges Identified": "Detail the initial challenges, like slow response to market trends and poor cross-departmental collaboration.",
            "Role of the Scrum Master": "Discuss how the CSM led the transition to Agile, focusing on strategies for cross-functional collaboration and quick adaptation.",
            "Transformation Results": "Share the improvements seen, such as faster product launches, better team dynamics, and enhanced innovation."
        },
        "Section 5: Synthesizing Lessons Learned": {
            "Common Themes": "Extract common themes and strategies used by Scrum Masters across these case studies.",
            "Best Practices": "Summarize the best practices that emerge from these success stories."
        },
        "Conclusion": "These case studies illustrate that the role of a Certified Scrum Master is transformative and multifaceted. Through skillful application of Agile principles and effective team leadership, Scrum Masters play a crucial role in steering projects to success and fostering environments where innovation and collaboration thrive."
    },
    "CAPM Certification Guides": {
        "Starting Your Project Management Journey: A Beginner's Guide to CAPM": {
            "Introduction": "Embarking on a career in project management can be both exciting and daunting. One of the first steps for many aspiring project managers is obtaining the Certified Associate in Project Management (CAPM) certification. This entry-level credential, offered by the Project Management Institute (PMI), is designed to give beginners a solid foundation in project management principles. This blog post serves as a comprehensive guide for those beginning their project management journey with the CAPM certification.",
            "Section 1: Understanding the CAPM Certification": {
                "What is CAPM": "Define the CAPM certification and its place within the world of project management credentials.",
                "The Value of CAPM": "Discuss how the CAPM certification can benefit those starting in project management, including its recognition by employers and its role in building foundational knowledge."
            },
            "Section 2: Eligibility and Application Process for CAPM": {
                "Eligibility Requirements": "Outline the prerequisites for taking the CAPM exam, including education and contact hours of project management education.",
                "Navigating the Application Process": "Provide a step-by-step guide on applying for the CAPM exam, including tips for preparing the application and what to expect during the process."
            },
            "Section 3: Preparing for the CAPM Exam": {
                "Exam Overview": "Describe the structure of the CAPM exam, including the number of questions, the format, and the areas of knowledge it covers.",
                "Study Tips and Resources": "Offer advice on study techniques, recommended resources, study groups, and courses that can aid in exam preparation."
            },
            "Section 4: After the CAPM: Career Pathways in Project Management": {
                "Career Opportunities": "Explore the types of roles and industries where a CAPM certification can open doors for beginners.",
                "Path to PMP": "Discuss how the CAPM certification can be a stepping stone to the more advanced Project Management Professional (PMP) certification and what additional experience and education are required."
            },
            "Section 5: Maintaining and Leveraging Your CAPM Certification": {
                "Certification Maintenance": "Explain the requirements for maintaining and renewing the CAPM certification.",
                "Using CAPM in the Job Market": "Offer strategies for leveraging CAPM certification in job searches, resumes, and interviews."
            },
            "Section 6: Real-World Insights: CAPM Holders' Experiences": {
                "Testimonials and Success Stories": "Share stories and testimonials from CAPM certification holders about how the credential has impacted their career paths.",
                "Lessons Learned": "Highlight key takeaways and insights from these real-world experiences."
            },
            "Conclusion": "The CAPM certification is a significant first step in a project management career, providing foundational knowledge and a recognized credential that can open doors to new opportunities. As the start of a longer journey in project management, CAPM equips beginners with the confidence and skills needed to progress in this dynamic field."
        },
        "CAPM Certification: Laying the Groundwork for a Career in Project Management": {
            "Introduction": "For those aspiring to enter the field of project management, the Certified Associate in Project Management (CAPM) certification is a crucial stepping stone. This credential, offered by the Project Management Institute (PMI), is designed for individuals who wish to gain a solid foundation in project management principles and practices. This blog post delves into the CAPM certification, discussing its importance, the process of obtaining it, and how it can lay the groundwork for a successful career in project management.",
            "Section 1: Overview of the CAPM Certification": {
                "What is CAPM": "Provide a detailed introduction to the CAPM certification, explaining its role and recognition in the field of project management.",
                "Target Audience": "Describe who can benefit from the CAPM certification, including students, new graduates, and professionals seeking to transition into project management."
            },
            "Section 2: The Benefits of CAPM Certification": {
                "Knowledge and Skills": "Discuss how CAPM equips individuals with fundamental knowledge and skills in project management.",
                "Career Opportunities": "Explore how CAPM can enhance career prospects by qualifying individuals for various entry-level positions in project management.",
                "Credibility and Recognition": "Highlight how CAPM certification can increase credibility and recognition in the professional community."
            },
            "Section 3: CAPM Eligibility and Application Process": {
                "Eligibility Criteria": "Outline the specific eligibility requirements for the CAPM exam, including educational background and contact hours in project management education.",
                "Application Steps": "Provide a comprehensive guide on the application process for the CAPM exam, including registration, fees, and scheduling the exam."
            },
            "Section 4: Preparing for the CAPM Exam": {
                "Exam Content and Format": "Describe the structure of the CAPM exam, including the number of questions, duration, and main content areas.",
                "Study Resources and Strategies": "Recommend study materials, courses, and strategies for effective exam preparation, such as PMI’s resources, online forums, and study groups."
            },
            "Section 5: After CAPM: Next Steps in Your Project Management Career": {
                "Using CAPM in Your Career": "Offer advice on how to leverage CAPM certification for job searches, resume building, and networking.",
                "Path to PMP": "Discuss how the CAPM certification can be a foundation for pursuing the Project Management Professional (PMP) certification, including additional requirements and experience needed."
            },
            "Section 6: Personal Success Stories": {
                "Testimonials": "Share real-life success stories from individuals who have benefitted from obtaining their CAPM certification.",
                "Career Impact": "Highlight the tangible impacts of CAPM certification on their career paths and opportunities."
            },
            "Conclusion": "The CAPM certification is more than just an academic achievement; it's a gateway to the world of project management. For those beginning their journey in this dynamic field, CAPM serves as a solid foundation, providing the necessary knowledge and opening doors to exciting career opportunities."
        },
        "The Comparative Edge: CAPM in Today’s Project Management World": {
            "Introduction": "In the rapidly evolving world of project management, standing out and staying relevant are key to professional growth. The Certified Associate in Project Management (CAPM) certification, offered by the Project Management Institute (PMI), is increasingly recognized as a valuable credential in this competitive field. This blog post explores the comparative edge that CAPM offers in the modern project management landscape, examining its benefits, relevance, and how it stands alongside other certifications.",
            "Section 1: The Growing Importance of Project Management Certifications": {
                "Project Management Trends": "Discuss current trends in project management, including the demand for certified professionals and the expanding scope of project management roles.",
                "Role of Certifications": "Highlight how certifications like CAPM are becoming critical benchmarks for skills and knowledge in the industry."
            },
            "Section 2: CAPM – A Comprehensive Overview": {
                "What is CAPM?": "Provide an in-depth introduction to CAPM, including its objectives, structure, and target audience.",
                "Distinct Features of CAPM": "Discuss the unique aspects of CAPM, such as its focus on foundational knowledge and principles of project management."
            },
            "Section 3: CAPM vs Other Project Management Certifications": {
                "Comparison with PMP": "Contrast CAPM with the Project Management Professional (PMP) certification, focusing on differences in prerequisites, content, and career impact.",
                "Comparison with Other Entry-Level Certifications": "Compare CAPM with other entry-level project management certifications, highlighting its distinct advantages and global recognition."
            },
            "Section 4: The Advantages of Holding a CAPM Certification": {
                "Career Opportunities": "Explore how CAPM can open doors to entry-level project management roles and serve as a stepping stone for more advanced positions.",
                "Skill Enhancement": "Discuss how CAPM helps in developing essential project management skills that are valued across industries.",
                "Global Recognition": "Emphasize the international recognition of CAPM and how it enhances a professional’s credibility worldwide."
            },
            "Section 5: CAPM in Practical Application": {
                "Real-World Relevance": "Share insights on how CAPM principles and knowledge are applied in various industries and project types.",
                "Case Studies": "Include case studies or testimonials from CAPM-certified professionals, illustrating the practical benefits and career advancements they have experienced."
            },
            "Section 6: Preparing for and Maintaining CAPM Certification": {
                "Exam Preparation": "Offer guidance on preparing for the CAPM exam, including study resources, tips, and strategies.",
                "Certification Maintenance": "Explain the process of maintaining and renewing the CAPM certification, highlighting the importance of continuous learning in the field."
            },
            "Conclusion": "CAPM stands as a robust entry point into the world of project management, offering professionals a comparative edge through recognized credentials, foundational knowledge, and skill enhancement. In today’s competitive job market, obtaining the CAPM certification can be a strategic move for aspiring project managers and those seeking to establish their place in this dynamic field."
        }
    },
    "Certified Scrum Master Guides": {
        "The Role of a Certified Scrum Master in Agile Projects": {
            "Introduction": "Agile methodologies have transformed the world of project management, offering flexible and efficient approaches to handling complex projects. Within this paradigm, the role of a Certified Scrum Master (CSM) is pivotal. This blog post delves into the responsibilities, importance, and impact of a Certified Scrum Master in steering Agile projects towards success. It aims to provide a clear understanding of the CSM's role and why it's critical in today's fast-paced project environments.",
            "Section 1: Understanding Agile and Scrum": {
                "Agile Methodology Overview": "Briefly explain what Agile is and how it differs from traditional project management methodologies.",
                "Introduction to Scrum": "Dive into the Scrum framework as one of the most popular Agile methodologies, outlining its key components and principles."
            },
            "Section 2: The Certified Scrum Master Explained": {
                "Role and Responsibilities": "Define the role of a Scrum Master, detailing the responsibilities such as facilitating meetings (daily standups, sprint planning, retrospectives), removing impediments, and coaching the team in Agile practices.",
                "Difference from Traditional Project Managers": "Highlight how the role of a Scrum Master differs from that of a traditional project manager, emphasizing the servant-leadership aspect."
            },
            "Section 3: The Importance of Scrum Master Certification": {
                "Benefits of Certification": "Discuss the advantages of being a Certified Scrum Master, including recognition of expertise, a deeper understanding of Scrum, and enhanced career opportunities.",
                "Certification Process": "Provide an overview of how one can become a Certified Scrum Master, including prerequisites, training, and the certification exam."
            },
            "Section 4: The Scrum Master in Action": {
                "Facilitating Agile Processes": "Detail how a Scrum Master facilitates various Scrum ceremonies and processes to ensure smooth project execution.",
                "Team Dynamics and Performance": "Explore the role of the Scrum Master in team building, conflict resolution, and fostering a collaborative work environment.",
                "Continuous Improvement": "Discuss how a Scrum Master guides teams toward continuous improvement through regular retrospectives and feedback loops."
            },
            "Section 5: Challenges and Solutions in the Scrum Master Role": {
                "Common Challenges": "Address some typical challenges a Scrum Master may face, such as resistance to change, team dysfunctions, or organizational impediments.",
                "Strategies for Success": "Offer strategies and best practices for Scrum Masters to overcome these challenges effectively."
            },
            "Section 6: Case Studies and Real-World Examples": {
                "Success Stories": "Share case studies or success stories of how effective Scrum Masters have positively impacted Agile projects.",
                "Lessons Learned": "Draw key lessons and insights from these real-world examples."
            },
            "Conclusion": "The role of a Certified Scrum Master is multifaceted and instrumental in the success of Agile projects. With their expertise in Scrum principles and practices, Scrum Masters not only facilitate processes but also nurture team dynamics, drive efficiency, and foster an environment of continuous improvement. Their role is integral to realizing the full potential of Agile methodologies in project management."
        },
        "From Good to Great: Elevating Your Agile Team as a Scrum Master": {
            "Introduction": "In the dynamic realm of Agile project management, the role of a Scrum Master is not just to facilitate and oversee, but to elevate the team from good to great. This blog post focuses on how Scrum Masters can enhance their team's performance, foster a thriving Agile culture, and lead their teams to achieve exceptional results. By adopting specific strategies and mindsets, Scrum Masters can significantly impact the effectiveness and productivity of their Agile teams.",
            "Section 1: The Role of a Scrum Master in Agile Teams": {
                "Defining the Role": "Explore the fundamental responsibilities of a Scrum Master, emphasizing their role as facilitators, coaches, and impediment removers.",
                "Beyond the Basics": "Discuss the Scrum Master's role in setting the stage for high performance, including fostering team dynamics and encouraging continuous improvement."
            },
            "Section 2: Strategies for Team Empowerment and Growth": {
                "Encouraging Self-Organization": "Delve into methods for empowering teams to self-organize, make decisions, and take ownership of their work.",
                "Promoting Agile Principles": "Share how Scrum Masters can reinforce core Agile principles and values within their teams, ensuring they are deeply ingrained in the team's work ethic."
            },
            "Section 3: Enhancing Team Communication and Collaboration": {
                "Effective Communication Techniques": "Offer tips on improving communication within the team, including active listening, clear articulation of ideas, and open feedback channels.",
                "Collaboration Tools and Practices": "Suggest tools and practices that enhance collaboration, such as collaborative planning sessions and pair programming."
            },
            "Section 4: Navigating and Resolving Team Conflicts": {
                "Conflict Resolution": "Provide strategies for identifying, addressing, and resolving conflicts within the team in a constructive manner.",
                "Building a Positive Team Culture": "Discuss how a positive, respectful, and inclusive team culture can prevent conflicts and foster collaboration."
            },
            "Section 5: Focusing on Continuous Improvement": {
                "Implementing Retrospectives": "Detail how to effectively run retrospectives to reflect on processes, identify areas for improvement, and implement actionable changes.",
                "Encouraging a Growth Mindset": "Inspire teams to adopt a growth mindset, focusing on learning from mistakes and viewing challenges as opportunities."
            },
            "Section 6: Success Stories and Real-World Examples": {
                "Case Studies": "Share success stories or case studies where Scrum Masters have successfully transformed their teams.",
                "Lessons Learned": "Extract valuable lessons and practical tips from these examples."
            },
            "Conclusion": "The journey from good to great requires a Scrum Master to be more than just a process facilitator. It's about inspiring and leading teams to new heights of collaboration, innovation, and productivity. By adopting these strategies, Scrum Masters can play a pivotal role in elevating their teams and achieving outstanding results in the Agile landscape."
        },
        "Case Studies: Transformative Success Stories of Certified Scrum Masters": {
            "Introduction": "The role of a Certified Scrum Master (CSM) is vital in guiding Agile teams to success. But what does this success look like in practice? This blog post delves into several case studies showcasing the transformative impact Certified Scrum Masters have had on their teams and projects. Through these real-life examples, we'll explore the challenges, strategies, and outcomes that underscore the pivotal role Scrum Masters play in the Agile world.",
            "Section 1: The Impact of a Certified Scrum Master": {
                "The CSM Role": "Briefly revisit the responsibilities and expectations of a Certified Scrum Master in an Agile team.",
                "The Power of Certification": "Discuss how formal training and certification can enhance a Scrum Master's effectiveness."
            },
            "Section 2: Case Study 1 – Tech Industry Turnaround": {
                "Company Background": "Introduce a technology company struggling with delayed projects and low team morale.",
                "Challenges Faced": "Outline specific issues the company faced, such as poor communication, lack of clear goals, or ineffective processes.",
                "The Scrum Master's Role": "Detail the interventions and strategies employed by the CSM to address these challenges.",
                "Outcomes": "Share the positive changes observed, like improved project delivery times, enhanced team collaboration, and higher product quality."
            },
            "Section 3: Case Study 2 – Financial Services Revamp": {
                "Organization Profile": "Present a financial services firm looking to innovate and improve customer service.",
                "Initial Challenges": "Describe the hurdles, such as resistance to change or rigid traditional practices.",
                "Scrum Master Intervention": "Explain how the CSM facilitated change, including specific Agile practices introduced or cultural shifts encouraged.",
                "Results Achieved": "Highlight outcomes such as increased customer satisfaction, streamlined processes, and successful adoption of Agile methodologies."
            },
            "Section 4: Case Study 3 – Retail Sector Agile Transformation": {
                "Retail Company Overview": "Introduce a retail company aiming to rapidly adapt to the digital marketplace.",
                "Challenges Identified": "Detail the initial challenges, like slow response to market trends and poor cross-departmental collaboration.",
                "Role of the Scrum Master": "Discuss how the CSM led the transition to Agile, focusing on strategies for cross-functional collaboration and quick adaptation.",
                "Transformation Results": "Share the improvements seen, such as faster product launches, better team dynamics, and enhanced innovation."
            },
            "Section 5: Synthesizing Lessons Learned": {
                "Common Themes": "Extract common themes and strategies used by Scrum Masters across these case studies.",
                "Best Practices": "Summarize the best practices that emerge from these success stories."
            },
            "Conclusion": "These case studies illustrate that the role of a Certified Scrum Master is transformative and multifaceted. Through skillful application of Agile principles and effective team leadership, Scrum Masters play a crucial role in steering projects to success and fostering environments where innovation and collaboration thrive."
        }
    }
}

interface PageProps {
    params: {
      slug: string;
    };
  }
  
  const Page: React.FC<PageProps> = ({ params }) => {
    const { slug } = params;
    const contentSections = blog_map[slug] || {};
    const refs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const [activeSection, setActiveSection] = useState<string>('');
  
    const scrollToSection = (sectionKey: string) => {
      setActiveSection(sectionKey);
      const sectionRef = refs.current[sectionKey];
      if (sectionRef) {
        sectionRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  
    const renderSubContent = (subContent: string | { [key: string]: string }) => {
      if (typeof subContent === 'string') {
        return <p>{subContent}</p>;
      } else {
        return Object.entries(subContent).map(([subKey, value]) => (
          <div key={subKey} style={{ marginBottom: '10px' }}>
            <h3 style={{ fontWeight: 'bold', fontSize: '1.1em' }}>{subKey}</h3>
            <p>{value}</p>
          </div>
        ));
      }
    };
  
    // Navbar and footer heights
    const navbarHeight = 0;
    const footerHeight = 60;
  
    return (
      <div style={{ display: 'flex', paddingTop: `${navbarHeight}px` }}>
        <div style={{
          width: '200px',
          overflowY: 'auto',
          backgroundColor: '#f4f4f4',
          borderRight: '1px solid #ddd',
          padding: '1rem',
          position: 'sticky',
          top: `${navbarHeight}px`, // Stick to the top when scrolled down
          maxHeight: `calc(100vh - ${navbarHeight}px)`, // Ensure it's no taller than the viewport minus the navbar
        }}>
          {Object.keys(contentSections).map((sectionKey) => (
            <div
              key={sectionKey}
              onClick={() => scrollToSection(sectionKey)}
              style={{
                padding: '0.5rem 0',
                fontWeight: activeSection === sectionKey ? 'bold' : 'normal',
                cursor: 'pointer',
              }}
            >
              {sectionKey}
            </div>
          ))}
        </div>
        <div style={{ flex: 1, padding: '0 20px' }}>
          {Object.entries(contentSections).map(([sectionKey, content]) => (
            <div
              ref={(el) => (refs.current[sectionKey] = el)}
              id={sectionKey}
              key={sectionKey}
              style={{ marginBottom: '50px' }}
            >
              <h2 style={{ fontWeight: 'bold', fontSize: '1.2em' }}>{sectionKey}</h2>
              {renderSubContent(content)}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Page;  