import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, HashRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import SummaryScreen from './screens/summaryScreen/SummaryScreen';
import ObjectOrientedProgrammingOverviewScreen from './screens/objectOrientedProgrammingOverviewScreen/ObjectOrientedProgrammingOverviewScreen';
import ExceptionsRuntimeExceptionsAndErrorsScreen from './screens/exceptionsRuntimeExceptionsAndErrorsScreen/ExceptionsRuntimeExceptionsAndErrorsScreen';
import WrappersOfPrimitiveTypesScreen from './screens/wrappersOfPrimitiveTypesScreen/WrappersOfPrimitiveTypesScreen';
import StringsAndStringConstantPoolScreen from './screens/stringsAndStringConstantPoolScreen/StringsAndStringConstantPoolScreen';
import DateTimeAPIScreen from './screens/dateTimeAPIScreen/DateTimeAPIScreen';
import InternationalizationScreen from './screens/internationalizationScreen/InternationalizationScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
        <Routes>
          <Route element={<App />} >
            <Route path="/" element={<SummaryScreen />} exact/>
            <Route path="objectOrientedProgrammingOverview" element={<ObjectOrientedProgrammingOverviewScreen />} />
            <Route path="exceptionsRuntimeExceptionsAndErrors" element={<ExceptionsRuntimeExceptionsAndErrorsScreen />} />
            <Route path="wrappersOfPrimitiveTypes" element={<WrappersOfPrimitiveTypesScreen />} />
            <Route path="stringsAndStringConstantPool" element={<StringsAndStringConstantPoolScreen />} />
            <Route path="dateTimeAPI" element={<DateTimeAPIScreen />} />
            <Route path="internationalization" element={<InternationalizationScreen />} />
            {/* <Route path="regexOrRegexp" element={<RegexOrRegexpScreen />} />
            <Route path="inputOutputLegacyAPI" element={<InputOutputLegacyAPIScreen />} />
            <Route path="newInputOutputAPI" element={<NewInputOutputAPIScreen />} />
            <Route path="serialization" element={<SerializationScreen />} />
            <Route path="collectionsAPI" element={<CollectionsAPI_DataStructuresScreen />} />
            <Route path="generics" element={<GenericsScreen />} />
            <Route path="nestedInnerClass" element={<NestedInnerClassScreen />} />
            <Route path="functionalProgramming" element={<FunctionalProgrammingScreen/>} />
            <Route path="lambdasFunctionalProgramming" element={<Lambdas_FunctionalProgrammingScreen/>} />
            <Route path="methodReference" element={<MethodReferenceScreen/>} />
            <Route path="optionalObjectNullPointerHandling" element={<OptionalObject_NullPointerHandlingScreen/>} />
            <Route path="streamsFunctionalProgramming" element={<Streams_FunctionalProgrammingScreen/>} />
            <Route path="threads" element={<ThreadsScreen/>} />
            <Route path="synchronizationMultiThreads" element={<Synchronization_MultiThreadsScreen/>} />
            <Route path="concurrencyMultiThreads" element={<Concurrency_MultiThreadsScreen/>} />
            <Route path="designPatternsGangOfFour" element={<DesignPatterns_GangOfFourScreen/>} />
            <Route path="jdbcDatabaseConnection" element={<JDBC_DatabaseConnectionScreen/>} />
            <Route path="reflectionMetaProgramming" element={<Reflection_MetaProgrammingScreen/>} /> */}
          </Route>
        </Routes>
      </HashRouter>
  </React.StrictMode>
);