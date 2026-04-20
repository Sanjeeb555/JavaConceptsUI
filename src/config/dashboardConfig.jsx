import {
  Code,
  BookOpen,
  Settings,
  Layers,
  Database,
  Package,
  Grid,
  AlertTriangle,
  HelpCircle,
} from "lucide-react";

import Introduction from "../dashboard/dashboardPages/Introduction/Introduction";
import Installations from "../dashboard/dashboardPages/Installtion/Installtion";
import Identifier from "../dashboard/dashboardPages/Identifier/Identifier";
import DataType from "../dashboard/dashboardPages/DataType/DataType";
import TypeCasting from "../dashboard/dashboardPages/TypeCasting/TypeCasting";
import Variable from "../dashboard/dashboardPages/Variable/Variables";
import Operator from "../dashboard/dashboardPages/Operators/Operators";
import FlowControl from "../dashboard/dashboardPages/FlowControl/FlowControl";
import Class from "../dashboard/dashboardPages/OOPSConcepts/Class";
import Method from "../dashboard/dashboardPages/OOPSConcepts/Method";
import Features from "../dashboard/dashboardPages/OOPSConcepts/Features";
import Inheritance from "../dashboard/dashboardPages/OOPSConcepts/Inheritance";
import Overloading from "../dashboard/dashboardPages/OOPSConcepts/Overloading";
import Overriding from "../dashboard/dashboardPages/OOPSConcepts/Overriding";
import Modifiers from "../dashboard/dashboardPages/OOPSConcepts/Modifiers";
import Constructors from "../dashboard/dashboardPages/OOPSConcepts/Constructors";
import Interface from "../dashboard/dashboardPages/OOPSConcepts/Interface";
import Blocks from "../dashboard/dashboardPages/OOPSConcepts/Blocks";
import Casting from "../dashboard/dashboardPages/OOPSConcepts/Casting";
import Factory from "../dashboard/dashboardPages/OOPSConcepts/Factory";
import Singleton from "../dashboard/dashboardPages/OOPSConcepts/Singleton";
import Hiding from "../dashboard/dashboardPages/OOPSConcepts/Hiding";
import Abstraction from "../dashboard/dashboardPages/OOPSConcepts/Abstraction";
import Encapsulation from "../dashboard/dashboardPages/OOPSConcepts/Encapsulation";
import Polymorphism from "../dashboard/dashboardPages/OOPSConcepts/Polymorphism";
import ObjectClass from "../dashboard/dashboardPages/java.langPackage/ObjectClass";
import StringClass from "../dashboard/dashboardPages/java.langPackage/StringClass";
import StringMethods from "../dashboard/dashboardPages/java.langPackage/StringMethods";
import StringBuffer from "../dashboard/dashboardPages/java.langPackage/StringBuffer";
import StringBufferMethods from "../dashboard/dashboardPages/java.langPackage/StringBufferMethods";
import StringBuilder from "../dashboard/dashboardPages/java.langPackage/StringBuilder";
import WrapperClass from "../dashboard/dashboardPages/java.langPackage/WrapperClass";
import WrapperConstructors from "../dashboard/dashboardPages/java.langPackage/WrapperConstructors";
import WrapperMethods from "../dashboard/dashboardPages/java.langPackage/WrapperMethods";
import AutoboxingUnboxing from "../dashboard/dashboardPages/java.langPackage/AutoboxingUnboxing";
import CollectionFramework from "../dashboard/dashboardPages/collectionFramework/CollectionFramework";
import List from "../dashboard/dashboardPages/collectionFramework/List";
import Set from "../dashboard/dashboardPages/collectionFramework/Set";
import Queue from "../dashboard/dashboardPages/collectionFramework/Queue";
import Map from "../dashboard/dashboardPages/collectionFramework/Map";
import Array from "../dashboard/dashboardPages/Array/Array";
import ExceptionHandling from "../dashboard/dashboardPages/exceptionHandling/ExceptionHandling";
import InterviewQuestion from "../dashboard/dashboardPages/interviewquestion/InterviewQuestion";

/**
 * Single source of truth for the dashboard sidebar and route definitions.
 *
 * Each entry describes a sidebar group:
 *   - title : group heading text
 *   - icon  : lucide-react component for the group icon
 *   - links : array of { label, routePath, element }
 *       - label      : sidebar link text
 *       - routePath  : URL segment relative to /dashboard (e.g. "introduction")
 *       - element    : the React component to render for that route
 *
 * Consumers:
 *   - src/routes/routes.jsx   – builds nested <Route> children from routePath + element
 *   - src/dashboard/Dashboard.jsx – builds sidebarData by prepending /dashboard/ to routePath
 */
export const dashboardConfig = [
  {
    title: "Introduction",
    icon: BookOpen,
    links: [{ label: "Introduction", routePath: "introduction", element: <Introduction /> }],
  },
  {
    title: "Installation",
    icon: Settings,
    links: [{ label: "Installation", routePath: "installation", element: <Installations /> }],
  },
  {
    title: "Identifier",
    icon: Code,
    links: [{ label: "Identifier", routePath: "identifier", element: <Identifier /> }],
  },
  {
    title: "Data Type",
    icon: Database,
    links: [{ label: "Data Type", routePath: "datatype", element: <DataType /> }],
  },
  {
    title: "Type Casting",
    icon: Layers,
    links: [{ label: "Type Casting", routePath: "typecasting", element: <TypeCasting /> }],
  },
  {
    title: "Variables",
    icon: Package,
    links: [{ label: "Variables", routePath: "variables", element: <Variable /> }],
  },
  {
    title: "Operators",
    icon: Grid,
    links: [{ label: "Operators", routePath: "operators", element: <Operator /> }],
  },
  {
    title: "Flow Control",
    icon: Code,
    links: [{ label: "Flow Control", routePath: "flowcontrol", element: <FlowControl /> }],
  },
  {
    title: "OOPS Concept",
    icon: Layers,
    links: [
      { label: "Class", routePath: "oops/class", element: <Class /> },
      { label: "Methods", routePath: "oops/methods", element: <Method /> },
      { label: "Features of Method", routePath: "oops/features", element: <Features /> },
      { label: "Inheritance", routePath: "oops/inheritance", element: <Inheritance /> },
      { label: "Method Overloading", routePath: "oops/overloading", element: <Overloading /> },
      { label: "Method Overriding", routePath: "oops/overriding", element: <Overriding /> },
      { label: "Modifiers", routePath: "oops/modifiers", element: <Modifiers /> },
      { label: "Constructors", routePath: "oops/constructors", element: <Constructors /> },
      { label: "Interface", routePath: "oops/interface", element: <Interface /> },
      { label: "Blocks", routePath: "oops/blocks", element: <Blocks /> },
      { label: "Object Type Casting", routePath: "oops/casting", element: <Casting /> },
      { label: "Factory Method", routePath: "oops/factory", element: <Factory /> },
      { label: "Singleton Class", routePath: "oops/singleton", element: <Singleton /> },
      { label: "Data Hiding", routePath: "oops/hiding", element: <Hiding /> },
      { label: "Abstraction", routePath: "oops/abstraction", element: <Abstraction /> },
      { label: "Encapsulation", routePath: "oops/encapsulation", element: <Encapsulation /> },
      { label: "Polymorphism", routePath: "oops/polymorphism", element: <Polymorphism /> },
    ],
  },
  {
    title: "java.lang Package",
    icon: Package,
    links: [
      { label: "Object Class", routePath: "lang/objectclass", element: <ObjectClass /> },
      { label: "String Class", routePath: "lang/stringclass", element: <StringClass /> },
      { label: "String Class Methods", routePath: "lang/stringmethods", element: <StringMethods /> },
      { label: "StringBuffer Class", routePath: "lang/stringbuffer", element: <StringBuffer /> },
      { label: "StringBuffer Class Methods", routePath: "lang/stringbuffermethods", element: <StringBufferMethods /> },
      { label: "StringBuilder Class", routePath: "lang/stringbuilder", element: <StringBuilder /> },
      { label: "Wrapper Class", routePath: "lang/wrapperclass", element: <WrapperClass /> },
      { label: "Wrapper Constructors", routePath: "lang/wrapperconstructors", element: <WrapperConstructors /> },
      { label: "Utility Methods", routePath: "lang/wrappermethods", element: <WrapperMethods /> },
      { label: "Autoboxing/Autounboxing", routePath: "lang/autoboxing", element: <AutoboxingUnboxing /> },
    ],
  },
  {
    title: "Collection Framework",
    icon: Grid,
    links: [
      { label: "Collection Framework", routePath: "collection/framework", element: <CollectionFramework /> },
      { label: "List", routePath: "collection/list", element: <List /> },
      { label: "Set", routePath: "collection/set", element: <Set /> },
      { label: "Queue", routePath: "collection/queue", element: <Queue /> },
      { label: "Map", routePath: "collection/map", element: <Map /> },
    ],
  },
  {
    title: "Arrays",
    icon: Database,
    links: [{ label: "Array", routePath: "arrays", element: <Array /> }],
  },
  {
    title: "Exception Handling",
    icon: AlertTriangle,
    links: [{ label: "Exception Handling", routePath: "exceptions", element: <ExceptionHandling /> }],
  },
  {
    title: "Interview Questions",
    icon: HelpCircle,
    links: [{ label: "Interview Questions", routePath: "interview", element: <InterviewQuestion /> }],
  },
];
