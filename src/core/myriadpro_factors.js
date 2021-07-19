/* Copyright 2021 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Factors to rescale LiberationSans-Bold.ttf to have the same
// metrics as MyriadPro-Bold.otf.
const MyriadProBoldFactors = [
  1.36898, 1, 0.90838, 0.868, 0.868, 0.90838, 0.90838, 0.90838, 0.90838,
  0.90838, 0.90838, 0.91945, 0.90838, 0.90838, 0.90838, 0.90838, 0.90838,
  0.83637, 0.83637, 0.82391, 0.82391, 0.82391, 0.82391, 0.82391, 0.82391,
  0.91905, 0.96376, 0.96376, 0.97484, 0.90157, 0.80061, 0.80061, 0.80061,
  0.80061, 0.80061, 0.80061, 0.80061, 0.80061, 0.80061, 0.95417, 0.80061,
  0.80061, 0.75261, 0.95407, 0.87992, 0.97484, 0.99793, 0.86275, 0.8768, 0.8019,
  0.8768, 0.8768, 1, 0.8768, 0.95407, 1, 1, 1, 1, 0.97069, 0.95407, 1.0258,
  0.887, 1.0258, 1.0258, 1.0258, 1.0258, 1.0258, 1.0258, 1.0258, 1.0258, 1.0258,
  1.0258, 0.82976, 1.0258, 0.73901, 0.73901, 0.85022, 0.85022, 1, 0.83655,
  0.83655, 0.97153, 0.83655, 1, 0.83655, 0.84638, 1.0156, 1.0156, 0.95546,
  0.95546, 0.95546, 1, 0.95546, 0.95546, 0.92179, 0.936, 0.92179, 0.92179,
  0.92179, 0.92179, 0.92179, 0.92179, 0.92179, 0.92796, 0.97268, 0.92179,
  0.96034, 0.92179, 0.92179, 0.92179, 0.87107, 0.95638, 0.92361, 0.91709,
  0.92179, 0.82114, 0.82114, 0.82114, 1, 0.87107, 0.8096, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 0.8096, 0.8096, 1, 0.8096, 1, 0.96318, 0.89713, 0.89713,
  0.89713, 0.89713, 1, 0.92436, 0.86958, 0.94438, 0.94438, 0.94438, 0.94438,
  0.94438, 0.94438, 0.94438, 0.94438, 0.94438, 0.93704, 0.93704, 0.83689,
  0.94438, 0.94438, 0.95353, 0.94083, 0.94083, 0.94083, 0.94083, 0.94083,
  0.91905, 0.89192, 0.90406, 0.90406, 0.90406, 0.90406, 0.90406, 0.9446, 0.9446,
  0.9446, 0.9446, 0.9446, 0.94938, 0.94938, 0.94938, 0.94938, 0.90088, 1,
  0.94938, 0.9031, 0.9031, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 0.94938, 0.94836, 0.94836, 0.94938, 0.93884, 0.83181, 0.94938,
  1.08595, 0.94938, 0.94938, 1, 1, 1, 1, 1, 1, 1, 1.02058, 1.02058, 1.16661,
  0.78966, 0.94938, 0.97898, 1.18777, 1.01149, 0.96174, 1, 0.80687, 0.80687,
  0.94292, 0.94292, 0.90088, 1, 1.01149, 0.96544, 0.81093, 0.81093, 0.90088, 1,
  1, 0.81093, 0.81093, 0.81093, 0.81093, 0.90088, 0.99793, 0.87548, 1, 0.90088,
  1, 1, 0.78076, 0.93582, 1, 1, 0.91882, 0.99793, 1, 0.97571, 0.94219, 0.94219,
  0.84313, 0.97571, 0.89022, 0.9498, 1, 0.90088, 1, 0.9358, 1.08595, 1, 1,
  0.99793, 0.90088, 0.98621, 0.94938, 0.94938, 0.94938, 0.94938, 0.94938,
  0.94938, 0.94938, 0.94938, 0.99793, 1, 1, 0.94938, 1, 0.89903, 0.95933,
  0.94938, 0.98607, 1.0373, 1.02058, 1, 1.36145, 0.95933, 0.95933, 0.93969,
  0.80479, 1, 0.80479, 1.024, 1, 1, 1, 0.99793, 1, 1, 0.99793, 0.99793, 1, 1,
  0.9577, 0.92601, 0.9577, 0.9577, 1, 0.9577, 0.98225, 0.90088, 1, 1.02058,
  1.08595, 0.8361, 0.8361, 0.81079, 0.81079, 0.95933, 0.95933, 0.95933, 1, 1,
  0.90088, 1, 0.98621, 0.98621, 0.98621, 0.98621, 0.98621, 0.98621, 1.01591,
  0.98621, 1.05486, 1.30692, 1, 1, 1, 1, 1, 1, 0.98621, 1.0078, 1.0078, 1.0078,
  1.0078, 0.98621, 1.0474, 1.0474, 0.97455, 0.98275, 1, 0.97455, 0.98981,
  0.98981, 0.9314, 0.73977, 1, 0.73903, 1.02058, 1.08595, 1, 1, 1.02058, 1,
  1.16161, 1.033, 1, 0.9672, 0.54324, 1, 1, 1.02058, 1, 0.95617, 1.02058, 1, 1,
  0.95933, 0.95933, 0.8271, 0.95933, 1, 0.99793, 1, 1.08595, 0.95933, 0.91701,
  0.98894, 0.9446, 0.9446, 0.9446, 0.9446, 0.9446, 0.91964, 0.90088, 0.9446,
  0.9446, 0.9446, 0.86774, 0.86774, 0.9446, 0.9446, 0.99793, 1, 0.99642,
  0.99642, 1, 1.0213, 1.05686, 1, 0.9446, 0.9446, 0.9446, 0.97898, 0.97455,
  0.94292, 0.94292, 1.17173, 0.9897, 0.93582, 1.285, 1, 0.99394, 0.78367,
  1.02058, 1.08595, 0.80535, 0.96361, 0.97407, 0.72851, 0.72851, 0.83734, 0.918,
  0.908, 0.908, 0.93582, 1, 0.93582, 0.93582, 0.86209, 0.97646, 0.97646, 1.0732,
  0.97646, 1, 0.62295, 1, 0.9553, 0.90088, 1, 0.78036, 0.78036, 0.78036, 1,
  0.78036, 1, 1, 1.00872, 0.99793, 1, 1, 1, 0.86832, 1, 0.99793, 1.19137, 1, 1,
  0.99793, 0.76169, 1, 1.10208, 1.0128, 1.10208, 0.77452, 1, 1.05453, 0.97898,
  0.99793, 1, 0.99642, 0.90088, 1, 0.90989, 0.65, 1, 1, 1, 1, 0.99793, 0.95442,
  0.95442, 0.95442, 0.95442, 0.95442, 0.95442, 0.95442, 0.95442, 0.89903, 1,
  0.72706, 0.96694, 1, 1, 1, 1, 0.89713, 1.10208, 0.90088, 0.78076, 1, 1, 1, 1,
  0.96694, 1, 1, 1, 1, 1, 0.74854, 0.93582, 1, 1, 1, 1, 0.95442, 1, 0.95871,
  0.95871, 0.95871, 0.95871, 0.95442, 0.95442, 0.95298, 0.97579, 0.97579,
  0.97579, 0.97579, 0.97579, 0.9332, 1.05993, 0.94039, 0.94039, 0.94039,
  0.94039, 0.99793, 0.94039, 0.938, 0.938, 0.938, 0.938, 0.99793, 0.95776,
];
const MyriadProBoldLineHeight = 1.2;

// Factors to rescale LiberationSans-BoldItalic.ttf to have the same
// metrics as MyriadPro-BoldIt.otf.
const MyriadProBoldItalicFactors = [
  1.36898, 1, 0.85576, 0.845, 0.845, 0.85576, 0.85576, 0.85576, 0.85576,
  0.85576, 0.85576, 0.85576, 0.85576, 0.85576, 0.85576, 0.85576, 0.85576,
  0.80591, 0.80591, 0.80729, 0.80729, 0.80729, 0.80729, 0.80729, 0.80729,
  0.85308, 0.94299, 0.94299, 0.95961, 0.94729, 0.77512, 0.77512, 0.77512,
  0.77512, 0.77512, 0.77512, 0.77512, 0.77512, 0.77512, 0.92098, 0.77512,
  0.77512, 0.66862, 0.92222, 0.7927, 0.95961, 0.97276, 0.83655, 0.86523, 0.7805,
  0.86523, 0.86523, 1, 0.86523, 0.92222, 1, 1, 1, 1, 0.92222, 0.92222, 0.98621,
  0.86036, 0.98621, 0.98621, 0.98621, 0.98621, 0.98621, 0.98621, 0.98621,
  0.98621, 0.98621, 0.98621, 0.69323, 0.98621, 0.71743, 0.71743, 0.81698,
  0.81698, 1, 0.79726, 0.79726, 0.92655, 0.79726, 1, 0.79726, 0.81691, 0.98558,
  0.98558, 0.92222, 0.92222, 0.92222, 1, 0.92222, 0.92222, 0.90637, 0.909,
  0.90637, 0.90637, 0.90637, 0.90637, 0.90637, 0.90637, 0.90637, 0.92346,
  0.89711, 0.90637, 0.88127, 0.90251, 0.90251, 0.90637, 0.83809, 0.93157,
  0.90976, 0.83392, 0.90637, 0.80729, 0.80729, 0.80729, 1, 0.83809, 0.76463, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.76463, 0.76463, 1, 0.76463, 1,
  0.94523, 0.86275, 0.86275, 0.86275, 0.86275, 1, 0.90637, 0.83659, 0.90699,
  0.90699, 0.90699, 0.90699, 0.90699, 0.90699, 0.90699, 0.90699, 0.90699,
  0.83509, 0.83509, 0.72459, 0.90699, 0.90699, 0.91605, 0.9154, 0.9154, 0.9154,
  0.9154, 0.9154, 0.85308, 0.85359, 0.85458, 0.85458, 0.85458, 0.85458, 0.85458,
  0.90531, 0.90531, 0.90531, 0.90531, 0.90531, 0.99613, 0.99613, 0.99613,
  0.99613, 1.18616, 1, 0.99613, 0.85811, 0.85811, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.99613, 0.92886, 0.92886, 0.99613,
  0.92222, 0.80178, 0.99613, 1.08595, 0.99613, 0.99613, 1, 1, 1, 1, 1, 1, 1,
  1.02058, 1.02058, 1.16148, 0.76813, 0.99613, 0.91677, 1.21296, 0.8578,
  0.90557, 1, 0.80687, 0.80687, 0.94292, 0.94292, 1.18616, 1, 0.8578, 0.95973,
  0.78216, 0.78216, 1.18616, 1, 1, 0.78216, 0.78216, 0.78216, 0.78216, 1.18616,
  0.97276, 0.81539, 1, 1.18616, 1, 1, 0.78076, 0.93582, 1, 1, 0.91339, 0.97276,
  1, 0.91677, 0.9332, 0.9332, 0.76783, 0.91677, 0.89022, 0.90276, 1, 1.18616, 1,
  1.30628, 1.08595, 1, 1, 0.97276, 1.18616, 0.95381, 0.90083, 0.90083, 0.90083,
  0.90083, 0.90083, 0.90083, 0.90083, 0.90083, 0.97276, 1, 1, 0.90083, 1,
  0.89903, 0.92168, 0.90083, 0.91324, 0.91324, 1.02058, 1, 1.36145, 0.92168,
  0.92168, 0.9135, 0.80779, 1, 0.80779, 0.98796, 1, 1, 1, 0.97276, 1, 1,
  0.97276, 0.97276, 1, 1, 0.9135, 0.86847, 0.9135, 0.9135, 1, 0.9135, 0.94951,
  1.18616, 1, 1.02058, 1.08595, 0.82891, 0.82711, 0.80479, 0.80178, 0.92168,
  0.92168, 0.92168, 1, 1, 1.18616, 1, 0.95381, 0.95381, 0.95381, 0.95381,
  0.95381, 0.95381, 0.97096, 0.95381, 1.05486, 1.23026, 1, 1, 1, 1, 1, 1,
  0.95381, 0.95381, 0.95381, 0.95381, 0.95381, 0.95381, 0.98981, 0.98981,
  0.95298, 0.9224, 1, 0.95298, 0.95381, 0.95381, 0.85408, 0.6894, 1, 0.74321,
  1.02058, 1.08595, 1, 1, 1.02058, 1, 1.20006, 1.0006, 1, 0.93459, 0.71526, 1,
  1, 1.02058, 1, 0.92699, 1.02058, 1, 1, 0.92168, 0.92168, 0.79464, 0.92168, 1,
  0.97276, 1, 1.08595, 0.92168, 0.86847, 0.97276, 0.91513, 0.91513, 0.91513,
  0.91513, 0.91513, 0.87514, 1.18616, 0.91513, 0.91513, 0.91513, 0.85923,
  0.85923, 0.91513, 0.91513, 0.97276, 1, 0.99043, 0.99043, 1, 1.08074, 1.04864,
  1, 0.91677, 0.91677, 0.91513, 0.92004, 0.96736, 0.94292, 0.94292, 1.14542,
  0.97733, 0.93582, 1.26, 1, 0.97355, 0.80487, 1.02058, 1.08595, 0.79199,
  0.89398, 0.91677, 0.71541, 0.71541, 0.81625, 0.896, 0.896, 0.896, 0.91782, 1,
  0.91782, 0.91782, 0.83266, 0.95077, 0.95077, 1.03493, 0.95077, 1, 0.55509, 1,
  0.93481, 1.18616, 1, 0.748, 0.748, 0.748, 1, 0.748, 1, 1, 0.99973, 0.97276, 1,
  1, 1, 0.88159, 1, 0.97276, 1.17337, 1, 1, 0.97276, 0.78694, 1, 1.04502,
  1.05214, 1.04502, 0.72651, 1, 0.99531, 0.92332, 0.97276, 1, 0.99043, 1.18616,
  1, 1.00899, 0.698, 1, 1, 1, 1, 0.97276, 0.91677, 0.91677, 0.91677, 0.91677,
  0.91677, 0.91677, 0.91677, 0.91677, 0.89903, 1, 0.66227, 0.96694, 1, 1, 1, 1,
  0.86275, 1.04502, 1.18616, 0.78076, 1, 1, 1, 1, 0.96694, 1, 1, 1, 1, 1,
  0.85633, 0.93582, 1, 1, 1, 1, 0.91677, 1, 0.90646, 0.90646, 0.90646, 0.90646,
  0.91677, 0.91677, 0.92061, 0.94236, 0.94236, 0.94236, 0.94236, 0.94236,
  0.89544, 1.0051, 0.89364, 0.89364, 0.89364, 0.89364, 0.97276, 0.89364, 0.9,
  0.9, 0.9, 0.9, 0.97276, 0.86842,
];
const MyriadProBoldItalicLineHeight = 1.2;

// Factors to rescale LiberationSans-Italic.ttf to have the same
// metrics as MyriadPro-It.otf.
const MyriadProItalicFactors = [
  1.36898, 1, 0.85158, 0.773, 0.773, 0.85158, 0.85158, 0.85158, 0.85158,
  0.85158, 0.85158, 0.85158, 0.85158, 0.85158, 0.85158, 0.85158, 0.85158,
  0.77812, 0.77812, 0.76852, 0.76852, 0.76852, 0.76852, 0.76852, 0.76852,
  0.78112, 0.89591, 0.89591, 0.90561, 0.88836, 0.70466, 0.70466, 0.70466,
  0.70466, 0.70466, 0.70466, 0.70466, 0.70466, 0.70466, 0.87396, 0.70466,
  0.70466, 0.62264, 0.86822, 0.7646, 0.90561, 0.88465, 0.76125, 0.80094,
  0.76449, 0.80094, 0.80094, 1, 0.80094, 0.86822, 1, 1, 1, 1, 0.86822, 0.86822,
  0.83864, 0.81402, 0.83864, 0.83864, 0.83864, 0.83864, 0.83864, 0.83864,
  0.83864, 0.83864, 0.83864, 0.83864, 0.65351, 0.83864, 0.728, 0.728, 0.77212,
  0.77212, 1, 0.79475, 0.79475, 0.85308, 0.79475, 1, 0.79475, 0.80553, 0.93637,
  0.93637, 0.87514, 0.87514, 0.87514, 1, 0.87514, 0.87514, 0.8588, 0.867,
  0.8588, 0.8588, 0.8588, 0.8588, 0.8588, 0.8588, 0.8588, 0.89386, 0.89947,
  0.8588, 0.86026, 0.85751, 0.85751, 0.8588, 0.76013, 0.82565, 0.85701, 0.77899,
  0.8588, 0.72421, 0.72421, 0.72421, 1, 0.76013, 0.69866, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 0.69866, 0.69866, 1, 0.69866, 1, 0.89058, 0.77598,
  0.77598, 0.77598, 0.77598, 1, 0.8588, 0.76013, 0.85991, 0.85991, 0.85991,
  0.85991, 0.85991, 0.85991, 0.85991, 0.85991, 0.85991, 0.8156, 0.8156, 0.69461,
  0.85991, 0.85991, 0.80811, 0.87832, 0.87832, 0.87832, 0.87832, 0.87832,
  0.78112, 0.82352, 0.77512, 0.77512, 0.77512, 0.77512, 0.77512, 0.8562, 0.8562,
  0.8562, 0.8562, 0.8562, 0.93859, 0.93859, 0.93859, 0.93859, 1.15012, 1,
  0.93859, 0.8075, 0.8075, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 0.93859, 0.9486, 0.9486, 0.93859, 0.88307, 0.77025, 0.93859,
  1.08595, 0.93859, 0.93859, 1, 1, 1, 1, 1, 1, 1, 1.27014, 1.02058, 1.06383,
  0.70926, 0.93859, 0.94399, 1.18417, 0.83537, 0.93298, 1, 0.85034, 0.85034,
  1.0222, 1.0222, 1.15012, 1, 0.83537, 0.79121, 0.846, 0.846, 1.15012, 1, 1,
  0.846, 0.846, 0.846, 0.846, 1.15012, 0.88465, 0.77487, 1, 1.15012, 1, 1,
  0.75945, 0.75945, 1, 1, 0.9161, 0.88465, 1, 0.94399, 0.86847, 0.86847, 0.8544,
  0.94399, 0.79519, 0.93942, 1, 1.15012, 1, 1.03901, 1.08595, 1, 1, 0.88465,
  1.15012, 0.82424, 0.81453, 0.81453, 0.81453, 0.81453, 0.81453, 0.81453,
  0.81453, 0.81453, 0.88465, 1, 1, 0.81453, 1, 0.89903, 0.96017, 0.81453,
  0.92388, 0.92388, 1.02058, 1, 1.36145, 0.96186, 0.96186, 0.9278, 0.84943, 1,
  0.70869, 1.0186, 1, 1, 1, 0.88465, 1, 1, 0.88465, 0.88465, 1, 1, 0.94219,
  0.878, 0.94219, 0.94219, 1, 0.94219, 0.88075, 1.15012, 1, 1.02058, 1.08595,
  0.73541, 0.73361, 0.73572, 0.73572, 0.96017, 0.96017, 0.96017, 1, 1, 1.15012,
  1, 1.03075, 0.82424, 0.82424, 0.82424, 0.82424, 0.82424, 1.02738, 0.82424,
  1.02119, 1.06233, 1, 1, 1, 1, 1, 1, 1.03075, 1.03075, 1.03075, 1.03075,
  1.03075, 0.82424, 1.02175, 1.02175, 0.912, 0.922, 1, 0.912, 1.03075, 1.03075,
  0.88787, 0.83911, 1, 0.66266, 1.02058, 1.08595, 1, 1, 1.02058, 1, 1.05233,
  1.06676, 1, 0.96998, 0.69353, 1, 1, 1.02058, 1, 0.95829, 1.02058, 1, 1,
  0.96017, 0.96017, 0.86865, 0.96017, 1, 0.88465, 1, 1.08595, 0.96017, 0.88,
  0.88465, 0.93859, 0.93859, 0.93859, 0.93859, 0.93859, 0.84759, 1.15012,
  0.93859, 0.93859, 0.93859, 0.86799, 0.86799, 0.93859, 0.93859, 0.88465, 1,
  0.9005, 0.9005, 1, 0.94565, 0.9446, 1, 0.8562, 0.8562, 0.93859, 0.94399,
  0.91974, 0.85283, 0.85283, 1.04828, 0.86936, 0.75945, 1.124, 1, 0.93969,
  0.78815, 1.02058, 1.08595, 0.74948, 0.85769, 0.94399, 0.69046, 0.62864,
  0.85639, 1.027, 1.027, 1.027, 0.87321, 1, 0.87321, 0.87321, 0.86948, 0.95493,
  0.95493, 0.98391, 0.95493, 1, 0.53609, 1, 0.93758, 1.15313, 1, 0.746, 0.746,
  0.746, 1, 0.746, 1, 1, 0.90083, 0.88465, 1, 1, 1, 0.89217, 1, 0.88465,
  1.17337, 1, 1, 0.88465, 0.75187, 1, 1.12658, 1.03737, 1.12658, 0.88417, 1,
  0.95119, 0.94578, 0.88465, 1, 0.9005, 1.15012, 1, 1.08106, 0.669, 1, 1, 1, 1,
  0.88465, 0.94578, 0.94578, 0.94578, 0.94578, 0.94578, 0.94578, 0.94578,
  0.94578, 0.89903, 1, 0.65507, 0.9219, 1, 1, 1, 1, 0.77598, 1.12658, 1.15012,
  0.75945, 1, 1, 1, 1, 0.9219, 1, 1, 1, 1, 1, 0.85034, 0.75945, 1, 1, 1, 1,
  0.94578, 1, 0.91123, 0.91123, 0.91123, 0.91123, 0.94578, 0.94578, 0.91, 0.979,
  0.979, 0.979, 0.979, 0.979, 0.882, 0.93559, 0.882, 0.882, 0.882, 0.882,
  0.88465, 0.882, 0.83, 0.83, 0.83, 0.83, 0.88465, 0.84596,
];
const MyriadProItalicLineHeight = 1.2;

// Factors to rescale LiberationSans-Regular.ttf to have the same
// metrics as MyriadPro-Regular.otf.
const MyriadProRegularFactors = [
  1.36898, 1, 0.91755, 0.788, 0.788, 0.91755, 0.91755, 0.91755, 0.91755,
  0.91755, 0.91755, 0.92138, 0.91755, 0.91755, 0.91755, 0.91755, 0.91755,
  0.8126, 0.8126, 0.80314, 0.80314, 0.80314, 0.80314, 0.80314, 0.80314, 0.85608,
  0.92222, 0.92222, 0.92915, 0.92819, 0.73764, 0.73764, 0.73764, 0.73764,
  0.73764, 0.73764, 0.73764, 0.73764, 0.73764, 0.90991, 0.73764, 0.73764,
  0.7154, 0.90284, 0.86169, 0.92915, 0.92241, 0.79726, 0.83051, 0.81884,
  0.83051, 0.83051, 1, 0.83051, 0.90284, 1, 1, 1, 1, 0.90976, 0.90284, 0.86023,
  0.82873, 0.86023, 0.86023, 0.86023, 0.86023, 0.86023, 0.86023, 0.86023,
  0.86023, 0.86023, 0.86023, 0.80513, 0.86023, 0.74, 0.74, 0.8126, 0.8126, 1,
  0.84869, 0.84869, 0.91172, 0.84869, 1, 0.84869, 0.85588, 0.96518, 0.96518,
  0.91115, 0.91115, 0.91115, 1, 0.91115, 0.91115, 0.8858, 0.894, 0.8858, 0.8858,
  0.8858, 0.8858, 0.8858, 0.8858, 0.8858, 0.94307, 0.98612, 0.8858, 0.94007,
  0.8858, 0.8858, 0.8858, 0.79761, 0.89992, 0.87791, 0.81992, 0.8858, 0.74498,
  0.74498, 0.74498, 1, 0.79761, 0.73914, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0.73914, 0.73914, 1, 0.73914, 1, 0.89297, 0.81363, 0.81363, 0.81363,
  0.81363, 1, 0.8858, 0.79611, 0.89591, 0.89591, 0.89591, 0.89591, 0.89591,
  0.89591, 0.89591, 0.89591, 0.89591, 0.88157, 0.88157, 0.82528, 0.89591,
  0.89591, 0.83659, 0.89633, 0.89633, 0.89633, 0.89633, 0.89633, 0.85608,
  0.83089, 0.8111, 0.8111, 0.8111, 0.8111, 0.8111, 0.90531, 0.90531, 0.90531,
  0.90531, 0.90531, 0.86667, 0.86667, 0.86667, 0.86667, 0.90088, 0.86667,
  0.86936, 0.86936, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 0.86667, 0.95308, 0.95308, 0.86667, 0.90706, 0.78105, 0.86667, 1.08595,
  0.86667, 0.86667, 1, 1, 1, 1, 1, 1, 1, 1.27014, 1.02058, 1.0664, 0.72601,
  0.86667, 1.0231, 1.22736, 0.92006, 0.97358, 1, 0.85034, 0.85034, 1.0222,
  1.0222, 0.90088, 0.92006, 0.80549, 0.896, 0.896, 0.90088, 0.896, 0.896, 0.896,
  0.896, 0.90088, 0.92241, 0.87064, 1, 0.90088, 1, 0.74505, 0.74505, 0.91882,
  0.92241, 1.01411, 0.89903, 0.89903, 0.93372, 1.01411, 0.79519, 0.98088, 1,
  0.90088, 1.03901, 1.08595, 1, 1, 0.92241, 0.90088, 0.84224, 0.90083, 0.90083,
  0.90083, 0.90083, 0.90083, 0.90083, 0.90083, 0.90083, 0.92241, 1, 0.90083, 1,
  0.89903, 0.99793, 0.90083, 0.98699, 0.98699, 1.02058, 1, 1.36145, 0.99793,
  0.99793, 0.97276, 0.82784, 1, 0.69067, 1.05099, 1, 1, 1, 0.92241, 1, 0.92241,
  0.92241, 1, 1.00512, 0.928, 1.00512, 1.00512, 1, 1.00512, 0.89713, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 0.90088, 1.02058, 1.08595, 0.75339, 0.75339, 0.76575,
  0.76575, 0.99793, 0.99793, 0.99793, 1, 1, 0.90088, 1.05326, 0.84224, 0.84224,
  0.84224, 0.84224, 0.84224, 1.07469, 0.84224, 1.02119, 1.1536, 1, 1, 1, 1, 1,
  1, 1.05326, 1.06226, 1.06226, 1.06226, 1.06226, 0.84224, 1.09377, 1.09377,
  0.938, 0.986, 1, 0.938, 1.06226, 1.06226, 0.944, 0.83704, 1, 0.81441, 1.02058,
  1.08595, 1, 1, 1.02058, 1, 1.05638, 1.08927, 1, 1.00119, 0.54324, 1, 1,
  1.02058, 1, 0.95978, 1.02058, 1, 1, 0.99793, 0.99793, 0.91887, 0.99793, 1,
  0.92241, 1, 1.08595, 0.99793, 0.938, 0.89364, 0.98714, 0.98714, 0.98714,
  0.98714, 0.98714, 0.91434, 0.90088, 0.98714, 0.98714, 0.98714, 0.88888,
  0.88888, 0.98714, 0.98714, 0.92241, 1, 0.91009, 0.91009, 1, 0.93484, 0.97198,
  1, 0.89876, 0.89876, 0.98714, 1.0231, 0.95325, 0.85283, 0.85283, 1.07257,
  0.89073, 0.74505, 1.156, 1, 0.99007, 0.80442, 1.02058, 1.08595, 0.74705,
  0.91879, 1.01231, 0.73002, 0.66466, 0.94935, 1.06904, 1.06304, 1.06304,
  0.93173, 1, 0.93173, 0.93173, 0.98472, 0.98196, 0.98196, 1.024, 0.98196, 1,
  0.56866, 1, 0.98972, 0.90088, 1, 0.792, 0.792, 0.792, 1, 0.792, 1, 1, 0.9332,
  0.92241, 1, 1, 0.89762, 1, 0.92241, 1.23456, 1, 1, 0.92241, 0.71119, 1,
  1.19137, 1.04552, 1.19137, 0.904, 1, 0.96017, 1.0231, 0.92241, 1, 0.91009,
  0.90088, 0.90388, 0.619, 1, 1, 1, 1, 0.92241, 0.99074, 0.99074, 0.99074,
  0.99074, 0.99074, 0.99074, 0.99074, 0.99074, 0.89903, 1, 0.76305, 0.9219, 1,
  1, 1, 1, 0.81363, 1.19137, 0.90088, 0.74505, 1, 1, 1, 1, 0.9219, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 0.72458, 0.74505, 1, 1, 1, 1, 1, 0.99074, 1, 0.95817, 0.95817,
  0.95817, 0.95817, 0.99074, 0.99074, 0.962, 1.01915, 1.01915, 1.01915, 1.01915,
  1.01915, 0.926, 0.96705, 0.942, 0.942, 0.942, 0.942, 0.92241, 0.942, 0.856,
  0.856, 0.856, 0.856, 0.92241, 0.92761,
];
const MyriadProRegularLineHeight = 1.2;

export {
  MyriadProBoldFactors,
  MyriadProBoldItalicFactors,
  MyriadProBoldItalicLineHeight,
  MyriadProBoldLineHeight,
  MyriadProItalicFactors,
  MyriadProItalicLineHeight,
  MyriadProRegularFactors,
  MyriadProRegularLineHeight,
};